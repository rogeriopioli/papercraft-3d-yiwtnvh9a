import { a as __toESM, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-Cd5rONqx.js";
import "./react-dom-DbWmce7y.js";
import { $ as ShieldCheck, I as useAuthStore, V as Button, c as Card, d as CardHeader, dt as useNavigate, f as CardTitle, l as CardContent, u as CardDescription, z as Input } from "./index-Ce5mAATO.js";
import { t as Label } from "./label-BYkfzCCt.js";
//#region src/pages/admin/Login.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function Login() {
	const [username, setUsername] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const { login } = useAuthStore();
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		if (login(username, password)) navigate("/admin");
		else setError("Credenciais inválidas. Dica: use admin / admin123");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-uid": "src/pages/admin/Login.tsx:27:5",
		"data-prohibitions": "[editContent]",
		className: "flex-1 flex items-center justify-center p-4 min-h-[60vh] animate-fade-in",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			"data-uid": "src/pages/admin/Login.tsx:28:7",
			"data-prohibitions": "[editContent]",
			className: "w-full max-w-md shadow-elevation border-primary/20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
				"data-uid": "src/pages/admin/Login.tsx:29:9",
				"data-prohibitions": "[]",
				className: "text-center pb-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"data-uid": "src/pages/admin/Login.tsx:30:11",
						"data-prohibitions": "[]",
						className: "mx-auto bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
							"data-uid": "src/pages/admin/Login.tsx:31:13",
							"data-prohibitions": "[editContent]",
							className: "w-6 h-6 text-primary"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						"data-uid": "src/pages/admin/Login.tsx:33:11",
						"data-prohibitions": "[]",
						className: "text-2xl font-heading",
						children: "Acesso Restrito"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
						"data-uid": "src/pages/admin/Login.tsx:34:11",
						"data-prohibitions": "[]",
						children: "Painel Administrativo PapercraftRP"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
				"data-uid": "src/pages/admin/Login.tsx:36:9",
				"data-prohibitions": "[editContent]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					"data-uid": "src/pages/admin/Login.tsx:37:11",
					"data-prohibitions": "[editContent]",
					onSubmit: handleSubmit,
					className: "space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/admin/Login.tsx:38:13",
							"data-prohibitions": "[]",
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								"data-uid": "src/pages/admin/Login.tsx:39:15",
								"data-prohibitions": "[]",
								htmlFor: "username",
								children: "Usuário"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								"data-uid": "src/pages/admin/Login.tsx:40:15",
								"data-prohibitions": "[editContent]",
								id: "username",
								autoComplete: "username",
								value: username,
								onChange: (e) => setUsername(e.target.value),
								required: true,
								className: "bg-muted/50"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/admin/Login.tsx:49:13",
							"data-prohibitions": "[]",
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								"data-uid": "src/pages/admin/Login.tsx:50:15",
								"data-prohibitions": "[]",
								htmlFor: "password",
								children: "Senha"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								"data-uid": "src/pages/admin/Login.tsx:51:15",
								"data-prohibitions": "[editContent]",
								id: "password",
								type: "password",
								autoComplete: "current-password",
								value: password,
								onChange: (e) => setPassword(e.target.value),
								required: true,
								className: "bg-muted/50"
							})]
						}),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							"data-uid": "src/pages/admin/Login.tsx:61:23",
							"data-prohibitions": "[editContent]",
							className: "text-sm text-destructive font-medium text-center",
							children: error
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							"data-uid": "src/pages/admin/Login.tsx:62:13",
							"data-prohibitions": "[]",
							type: "submit",
							className: "w-full h-11 text-base font-semibold",
							children: "Acessar Painel"
						})
					]
				})
			})]
		})
	});
}
//#endregion
export { Login as default };

//# sourceMappingURL=Login-Ceggx4SD.js.map