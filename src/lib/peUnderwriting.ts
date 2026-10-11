export type Coverage = "Not reviewed" | "Requested" | "Quoted" | "Bound (unverified)" | "Excluded" | "Expired";
export type Autonomy = "A0" | "A1" | "A2" | "A3" | "A4";
export type PackageInput = {
  name: string; revenue: number; delivery: number; technology: number;
  premium: number; reserve: number; compliance: number; coverage: Coverage;
  autonomy: Autonomy; payerPathway: "Clinical payer/contract" | "Enterprise contract";
};
export type CapitalInput = {
  equity: number; overhead: number; debtService: number; maintenanceCapex: number;
  cashTaxes: number; stressPercent: number;
};
export const packageNames = [
  "Recovery", "Wound Care", "Brain Health", "Cardiac Care", "Senior Care",
  "Care at Home", "Post-Acute Care", "Behavioral Care",
  "Regulation-in-a-Box™", "Cybersecurity-in-a-Box™",
] as const;
export const blankPackages = (): PackageInput[] => packageNames.map((name, i) => ({
  name, revenue: 0, delivery: 0, technology: 0, premium: 0, reserve: 0,
  compliance: 0, coverage: "Not reviewed", autonomy: "A0",
  payerPathway: i < 8 ? "Clinical payer/contract" : "Enterprise contract",
}));
export const blankCapital = (): CapitalInput => ({
  equity: 0, overhead: 0, debtService: 0, maintenanceCapex: 0,
  cashTaxes: 0, stressPercent: 20,
});
export const nonnegative = (n: number) => Number.isFinite(n) ? Math.max(0, n) : 0;
export const contribution = (p: PackageInput) => nonnegative(p.revenue) -
  [p.delivery,p.technology,p.premium,p.reserve,p.compliance].reduce((sum,n) => sum + nonnegative(n),0);
export function underwrite(packages: PackageInput[], capital: CapitalInput) {
  const revenue = packages.reduce((s,p)=>s+nonnegative(p.revenue),0);
  const annualContribution = packages.reduce((s,p)=>s+contribution(p),0);
  const insuranceBudget = packages.reduce((s,p)=>s+nonnegative(p.premium)+nonnegative(p.reserve),0);
  const ebitdaProxy = annualContribution - nonnegative(capital.overhead);
  const equityCashFlowProxy = ebitdaProxy - nonnegative(capital.debtService) -
    nonnegative(capital.maintenanceCapex) - nonnegative(capital.cashTaxes);
  const stress = Math.min(100,nonnegative(capital.stressPercent))/100;
  const downsideEbitda = ebitdaProxy - revenue*stress; // conservatively assumes fixed costs
  const equity = nonnegative(capital.equity);
  const cashOnCash = equity > 0 ? equityCashFlowProxy/equity : null;
  const exceptions = packages.flatMap((p,i) => {
    const reasons: string[] = [];
    if(p.revenue > 0 && p.coverage !== "Bound (unverified)") reasons.push("No verified bound coverage");
    if(i < 8 && p.autonomy === "A4") reasons.push("Autonomous clinical intervention prohibited in demo");
    if(p.autonomy === "A3" && i < 8) reasons.push("Clinician authorization must be documented");
    if(p.coverage === "Bound (unverified)") reasons.push("Policy/endorsement and named insured not independently verified");
    return reasons.map(reason=>({packageName:p.name,reason}));
  });
  return {revenue,annualContribution,insuranceBudget,ebitdaProxy,equityCashFlowProxy,
    downsideEbitda,cashOnCash,exceptions};
}
export const examplePackages = (): PackageInput[] => {
  const rows = [
    [350000,175000,35000,22000,15000,18000],
    [300000,130000,50000,35000,25000,18000],
    [260000,120000,42000,28000,16000,18000],
    [220000,115000,32000,22000,12000,16000],
    [280000,150000,33000,27000,15000,19000],
    [240000,140000,32000,26000,15000,16000],
    [320000,180000,35000,35000,22000,20000],
    [200000,120000,25000,26000,15000,16000],
    [180000,40000,40000,17000,9000,15000],
    [160000,45000,45000,21000,12000,17000],
  ];
  return blankPackages().map((p,i)=>({
    ...p, revenue:rows[i][0],delivery:rows[i][1],technology:rows[i][2],
    premium:rows[i][3],reserve:rows[i][4],compliance:rows[i][5],
    coverage:"Requested" as Coverage, autonomy:i<8?"A3" as Autonomy:"A2" as Autonomy,
  }));
};
export const exampleCapital = (): CapitalInput => ({
  equity:1800000,overhead:190000,debtService:90000,maintenanceCapex:45000,
  cashTaxes:40000,stressPercent:20,
});
