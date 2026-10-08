-- DRAFT: not applied. Map identity to the selected authentication provider before rollout.
-- Server-only connections; runtime role must NOT own tables or have BYPASSRLS.
BEGIN;
CREATE SCHEMA episode_twin;
CREATE TABLE episode_twin.tenants (tenant_id uuid PRIMARY KEY, name text NOT NULL);
CREATE TABLE episode_twin.actors (
 tenant_id uuid NOT NULL REFERENCES episode_twin.tenants, actor_id uuid NOT NULL,
 kind text NOT NULL CHECK(kind IN ('human','ai','system')), active boolean NOT NULL DEFAULT false,
 scopes text[] NOT NULL DEFAULT '{}', PRIMARY KEY(tenant_id,actor_id)
);
CREATE TABLE episode_twin.patients (
 tenant_id uuid NOT NULL REFERENCES episode_twin.tenants, patient_id uuid NOT NULL,
 synthetic boolean NOT NULL CHECK(synthetic), source_ref text NOT NULL,
 PRIMARY KEY(tenant_id,patient_id)
);
CREATE TABLE episode_twin.pathways (
 tenant_id uuid NOT NULL REFERENCES episode_twin.tenants, pathway_id uuid NOT NULL,
 version text NOT NULL, definition jsonb NOT NULL, PRIMARY KEY(tenant_id,pathway_id,version)
);
CREATE TABLE episode_twin.episodes (
 tenant_id uuid NOT NULL REFERENCES episode_twin.tenants, episode_id uuid NOT NULL,
 patient_id uuid NOT NULL, pathway_id uuid NOT NULL, pathway_version text NOT NULL,
 status text NOT NULL DEFAULT 'draft' CHECK(status IN ('draft','review','active','closed')),
 version integer NOT NULL DEFAULT 1 CHECK(version>0), simulation_mode boolean NOT NULL CHECK(simulation_mode),
 authority_state text NOT NULL DEFAULT 'human_review_required',
 economic_state text NOT NULL DEFAULT 'not_verified',
 PRIMARY KEY(tenant_id,episode_id),
 FOREIGN KEY(tenant_id,patient_id) REFERENCES episode_twin.patients,
 FOREIGN KEY(tenant_id,pathway_id,pathway_version) REFERENCES episode_twin.pathways
);
CREATE TABLE episode_twin.evidence (
 tenant_id uuid NOT NULL, record_id uuid NOT NULL, episode_id uuid NOT NULL,
 source_ref text NOT NULL CHECK(length(source_ref)>0), payload jsonb NOT NULL,
 created_by uuid NOT NULL, created_at timestamptz NOT NULL DEFAULT now(),
 PRIMARY KEY(tenant_id,record_id),
 FOREIGN KEY(tenant_id,episode_id) REFERENCES episode_twin.episodes,
 FOREIGN KEY(tenant_id,created_by) REFERENCES episode_twin.actors
);
CREATE TABLE episode_twin.care_tasks (
 tenant_id uuid NOT NULL, record_id uuid NOT NULL, episode_id uuid NOT NULL,
 source_ref text NOT NULL CHECK(length(source_ref)>0), payload jsonb NOT NULL,
 created_by uuid NOT NULL, created_at timestamptz NOT NULL DEFAULT now(),
 PRIMARY KEY(tenant_id,record_id),
 FOREIGN KEY(tenant_id,episode_id) REFERENCES episode_twin.episodes,
 FOREIGN KEY(tenant_id,created_by) REFERENCES episode_twin.actors
);
CREATE TABLE episode_twin.encounters (
 tenant_id uuid NOT NULL, record_id uuid NOT NULL, episode_id uuid NOT NULL,
 source_ref text NOT NULL CHECK(length(source_ref)>0), payload jsonb NOT NULL,
 created_by uuid NOT NULL, created_at timestamptz NOT NULL DEFAULT now(),
 PRIMARY KEY(tenant_id,record_id),
 FOREIGN KEY(tenant_id,episode_id) REFERENCES episode_twin.episodes,
 FOREIGN KEY(tenant_id,created_by) REFERENCES episode_twin.actors
);
CREATE TABLE episode_twin.consents (
 tenant_id uuid NOT NULL, record_id uuid NOT NULL, episode_id uuid NOT NULL,
 source_ref text NOT NULL CHECK(length(source_ref)>0), payload jsonb NOT NULL,
 created_by uuid NOT NULL, created_at timestamptz NOT NULL DEFAULT now(),
 PRIMARY KEY(tenant_id,record_id),
 FOREIGN KEY(tenant_id,episode_id) REFERENCES episode_twin.episodes,
 FOREIGN KEY(tenant_id,created_by) REFERENCES episode_twin.actors
);
CREATE TABLE episode_twin.observations (
 tenant_id uuid NOT NULL, record_id uuid NOT NULL, episode_id uuid NOT NULL,
 source_ref text NOT NULL CHECK(length(source_ref)>0), payload jsonb NOT NULL,
 created_by uuid NOT NULL, created_at timestamptz NOT NULL DEFAULT now(),
 PRIMARY KEY(tenant_id,record_id),
 FOREIGN KEY(tenant_id,episode_id) REFERENCES episode_twin.episodes,
 FOREIGN KEY(tenant_id,created_by) REFERENCES episode_twin.actors
);
CREATE TABLE episode_twin.coverage (
 tenant_id uuid NOT NULL, record_id uuid NOT NULL, episode_id uuid NOT NULL,
 source_ref text NOT NULL CHECK(length(source_ref)>0), payload jsonb NOT NULL,
 created_by uuid NOT NULL, created_at timestamptz NOT NULL DEFAULT now(),
 PRIMARY KEY(tenant_id,record_id),
 FOREIGN KEY(tenant_id,episode_id) REFERENCES episode_twin.episodes,
 FOREIGN KEY(tenant_id,created_by) REFERENCES episode_twin.actors
);
CREATE TABLE episode_twin.economic_events (
 tenant_id uuid NOT NULL, record_id uuid NOT NULL, episode_id uuid NOT NULL,
 source_ref text NOT NULL CHECK(length(source_ref)>0), payload jsonb NOT NULL,
 created_by uuid NOT NULL, created_at timestamptz NOT NULL DEFAULT now(),
 PRIMARY KEY(tenant_id,record_id),
 FOREIGN KEY(tenant_id,episode_id) REFERENCES episode_twin.episodes,
 FOREIGN KEY(tenant_id,created_by) REFERENCES episode_twin.actors
);
CREATE TABLE episode_twin.outcomes (
 tenant_id uuid NOT NULL, record_id uuid NOT NULL, episode_id uuid NOT NULL,
 source_ref text NOT NULL CHECK(length(source_ref)>0), payload jsonb NOT NULL,
 created_by uuid NOT NULL, created_at timestamptz NOT NULL DEFAULT now(),
 PRIMARY KEY(tenant_id,record_id),
 FOREIGN KEY(tenant_id,episode_id) REFERENCES episode_twin.episodes,
 FOREIGN KEY(tenant_id,created_by) REFERENCES episode_twin.actors
);
CREATE TABLE episode_twin.agent_runs (
 tenant_id uuid NOT NULL, record_id uuid NOT NULL, episode_id uuid NOT NULL,
 source_ref text NOT NULL CHECK(length(source_ref)>0), payload jsonb NOT NULL,
 created_by uuid NOT NULL, created_at timestamptz NOT NULL DEFAULT now(),
 PRIMARY KEY(tenant_id,record_id),
 FOREIGN KEY(tenant_id,episode_id) REFERENCES episode_twin.episodes,
 FOREIGN KEY(tenant_id,created_by) REFERENCES episode_twin.actors
);
CREATE TABLE episode_twin.authority_decisions (
 tenant_id uuid NOT NULL, decision_id uuid NOT NULL, episode_id uuid NOT NULL,
 requested_by uuid NOT NULL, reviewed_by uuid NOT NULL,
 episode_version integer NOT NULL, action_digest text NOT NULL, policy_version text NOT NULL,
 outcome text NOT NULL CHECK(outcome IN ('allow','deny','hold')), expires_at timestamptz NOT NULL,
 CHECK(requested_by <> reviewed_by), PRIMARY KEY(tenant_id,decision_id),
 FOREIGN KEY(tenant_id,episode_id) REFERENCES episode_twin.episodes,
 FOREIGN KEY(tenant_id,requested_by) REFERENCES episode_twin.actors,
 FOREIGN KEY(tenant_id,reviewed_by) REFERENCES episode_twin.actors
);
CREATE TABLE episode_twin.audit_events (
 tenant_id uuid NOT NULL, episode_id uuid NOT NULL, sequence bigint NOT NULL,
 actor_id uuid NOT NULL, operation text NOT NULL, occurred_at timestamptz NOT NULL DEFAULT now(),
 source_version text NOT NULL, payload jsonb NOT NULL, previous_hash text NOT NULL, event_hash text NOT NULL,
 PRIMARY KEY(tenant_id,episode_id,sequence),
 FOREIGN KEY(tenant_id,episode_id) REFERENCES episode_twin.episodes,
 FOREIGN KEY(tenant_id,actor_id) REFERENCES episode_twin.actors
);
CREATE TABLE episode_twin.idempotency_receipts (
 tenant_id uuid NOT NULL, actor_id uuid NOT NULL, key text NOT NULL,
 request_hash text NOT NULL, response jsonb NOT NULL, created_at timestamptz NOT NULL DEFAULT now(),
 PRIMARY KEY(tenant_id,actor_id,key), FOREIGN KEY(tenant_id,actor_id) REFERENCES episode_twin.actors
);
-- Tenant isolation is a second layer. Server must resolve authenticated membership/scopes.
-- Never accept app.tenant_id or app.actor_id from client-controlled query/body fields.
ALTER TABLE episode_twin.actors ENABLE ROW LEVEL SECURITY;
ALTER TABLE episode_twin.actors FORCE ROW LEVEL SECURITY;
CREATE POLICY tenant_scope ON episode_twin.actors USING (tenant_id::text = current_setting('app.tenant_id',true)) WITH CHECK (tenant_id::text = current_setting('app.tenant_id',true));
ALTER TABLE episode_twin.patients ENABLE ROW LEVEL SECURITY;
ALTER TABLE episode_twin.patients FORCE ROW LEVEL SECURITY;
CREATE POLICY tenant_scope ON episode_twin.patients USING (tenant_id::text = current_setting('app.tenant_id',true)) WITH CHECK (tenant_id::text = current_setting('app.tenant_id',true));
ALTER TABLE episode_twin.pathways ENABLE ROW LEVEL SECURITY;
ALTER TABLE episode_twin.pathways FORCE ROW LEVEL SECURITY;
CREATE POLICY tenant_scope ON episode_twin.pathways USING (tenant_id::text = current_setting('app.tenant_id',true)) WITH CHECK (tenant_id::text = current_setting('app.tenant_id',true));
ALTER TABLE episode_twin.episodes ENABLE ROW LEVEL SECURITY;
ALTER TABLE episode_twin.episodes FORCE ROW LEVEL SECURITY;
CREATE POLICY tenant_scope ON episode_twin.episodes USING (tenant_id::text = current_setting('app.tenant_id',true)) WITH CHECK (tenant_id::text = current_setting('app.tenant_id',true));
ALTER TABLE episode_twin.evidence ENABLE ROW LEVEL SECURITY;
ALTER TABLE episode_twin.evidence FORCE ROW LEVEL SECURITY;
CREATE POLICY tenant_scope ON episode_twin.evidence USING (tenant_id::text = current_setting('app.tenant_id',true)) WITH CHECK (tenant_id::text = current_setting('app.tenant_id',true));
ALTER TABLE episode_twin.care_tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE episode_twin.care_tasks FORCE ROW LEVEL SECURITY;
CREATE POLICY tenant_scope ON episode_twin.care_tasks USING (tenant_id::text = current_setting('app.tenant_id',true)) WITH CHECK (tenant_id::text = current_setting('app.tenant_id',true));
ALTER TABLE episode_twin.encounters ENABLE ROW LEVEL SECURITY;
ALTER TABLE episode_twin.encounters FORCE ROW LEVEL SECURITY;
CREATE POLICY tenant_scope ON episode_twin.encounters USING (tenant_id::text = current_setting('app.tenant_id',true)) WITH CHECK (tenant_id::text = current_setting('app.tenant_id',true));
ALTER TABLE episode_twin.consents ENABLE ROW LEVEL SECURITY;
ALTER TABLE episode_twin.consents FORCE ROW LEVEL SECURITY;
CREATE POLICY tenant_scope ON episode_twin.consents USING (tenant_id::text = current_setting('app.tenant_id',true)) WITH CHECK (tenant_id::text = current_setting('app.tenant_id',true));
ALTER TABLE episode_twin.observations ENABLE ROW LEVEL SECURITY;
ALTER TABLE episode_twin.observations FORCE ROW LEVEL SECURITY;
CREATE POLICY tenant_scope ON episode_twin.observations USING (tenant_id::text = current_setting('app.tenant_id',true)) WITH CHECK (tenant_id::text = current_setting('app.tenant_id',true));
ALTER TABLE episode_twin.coverage ENABLE ROW LEVEL SECURITY;
ALTER TABLE episode_twin.coverage FORCE ROW LEVEL SECURITY;
CREATE POLICY tenant_scope ON episode_twin.coverage USING (tenant_id::text = current_setting('app.tenant_id',true)) WITH CHECK (tenant_id::text = current_setting('app.tenant_id',true));
ALTER TABLE episode_twin.economic_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE episode_twin.economic_events FORCE ROW LEVEL SECURITY;
CREATE POLICY tenant_scope ON episode_twin.economic_events USING (tenant_id::text = current_setting('app.tenant_id',true)) WITH CHECK (tenant_id::text = current_setting('app.tenant_id',true));
ALTER TABLE episode_twin.outcomes ENABLE ROW LEVEL SECURITY;
ALTER TABLE episode_twin.outcomes FORCE ROW LEVEL SECURITY;
CREATE POLICY tenant_scope ON episode_twin.outcomes USING (tenant_id::text = current_setting('app.tenant_id',true)) WITH CHECK (tenant_id::text = current_setting('app.tenant_id',true));
ALTER TABLE episode_twin.agent_runs ENABLE ROW LEVEL SECURITY;
ALTER TABLE episode_twin.agent_runs FORCE ROW LEVEL SECURITY;
CREATE POLICY tenant_scope ON episode_twin.agent_runs USING (tenant_id::text = current_setting('app.tenant_id',true)) WITH CHECK (tenant_id::text = current_setting('app.tenant_id',true));
ALTER TABLE episode_twin.authority_decisions ENABLE ROW LEVEL SECURITY;
ALTER TABLE episode_twin.authority_decisions FORCE ROW LEVEL SECURITY;
CREATE POLICY tenant_scope ON episode_twin.authority_decisions USING (tenant_id::text = current_setting('app.tenant_id',true)) WITH CHECK (tenant_id::text = current_setting('app.tenant_id',true));
ALTER TABLE episode_twin.audit_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE episode_twin.audit_events FORCE ROW LEVEL SECURITY;
CREATE POLICY tenant_scope ON episode_twin.audit_events USING (tenant_id::text = current_setting('app.tenant_id',true)) WITH CHECK (tenant_id::text = current_setting('app.tenant_id',true));
ALTER TABLE episode_twin.idempotency_receipts ENABLE ROW LEVEL SECURITY;
ALTER TABLE episode_twin.idempotency_receipts FORCE ROW LEVEL SECURITY;
CREATE POLICY tenant_scope ON episode_twin.idempotency_receipts USING (tenant_id::text = current_setting('app.tenant_id',true)) WITH CHECK (tenant_id::text = current_setting('app.tenant_id',true));
CREATE FUNCTION episode_twin.reject_event_changes() RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN RAISE EXCEPTION 'Audit events are append-only'; END; $$;
CREATE TRIGGER immutable_events BEFORE UPDATE OR DELETE ON episode_twin.audit_events
FOR EACH ROW EXECUTE FUNCTION episode_twin.reject_event_changes();
REVOKE ALL ON SCHEMA episode_twin FROM PUBLIC;
REVOKE ALL ON ALL TABLES IN SCHEMA episode_twin FROM PUBLIC;
-- No runtime grants yet: intentional fail-closed draft pending adapter/role integration.
COMMIT;
