
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#2563EB',
					foreground: '#FFFFFF',
					hover: '#1D4ED8',
					light: '#3B82F6',
					dark: '#1E40AF'
				},
				secondary: {
					DEFAULT: '#F59E0B',
					foreground: '#FFFFFF',
					hover: '#D97706',
					light: '#FBBF24'
				},
				accent: {
					DEFAULT: '#8B5CF6',
					foreground: '#FFFFFF',
					light: '#A78BFA'
				},
				light: '#F0F9FF',
				dark: '#0F172A',
				gray: '#64748B',
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			backgroundColor: {
				'site-background': '#FAFBFC',
				'gradient-start': '#667EEA',
				'gradient-end': '#764BA2',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'gradient-mesh': 'linear-gradient(135deg, #667EEA 0%, #764BA2 25%, #F093FB 50%, #4FACFE 75%, #00F2FE 100%)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'glow': '0 0 20px rgba(37, 99, 235, 0.3)',
				'glow-lg': '0 0 40px rgba(37, 99, 235, 0.4)',
				'glow-secondary': '0 0 20px rgba(245, 158, 11, 0.3)',
				'inner-glow': 'inset 0 0 20px rgba(37, 99, 235, 0.1)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'gradient': {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center'
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center'
					}
				},
				'shimmer': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(37, 99, 235, 0.3)' },
					'50%': { boxShadow: '0 0 40px rgba(37, 99, 235, 0.6)' }
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'wiggle': {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'glow-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(37, 99, 235, 0.3), 0 0 40px rgba(139, 92, 246, 0.2)',
						opacity: '1'
					},
					'50%': { 
						boxShadow: '0 0 40px rgba(37, 99, 235, 0.6), 0 0 80px rgba(139, 92, 246, 0.4)',
						opacity: '0.8'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'gradient': 'gradient 8s ease infinite',
				'shimmer': 'shimmer 2s infinite',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'spin-slow': 'spin-slow 20s linear infinite',
				'wiggle': 'wiggle 1s ease-in-out infinite',
				'slide-up': 'slide-up 0.5s ease-out',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite'
			},
			transitionDuration: {
				'2000': '2000ms',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
