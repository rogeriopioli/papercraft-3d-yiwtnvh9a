import { a as __toESM, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-Cd5rONqx.js";
import "./react-dom-DbWmce7y.js";
import { n as useToast } from "./use-toast-CgSZLBKi.js";
import { t as Save } from "./save-yNwx0QSA.js";
import { V as Button, c as Card, d as CardHeader, f as CardTitle, l as CardContent, m as saveEmailSettings, p as getEmailSettings, u as CardDescription, z as Input } from "./index-Ce5mAATO.js";
import { t as Label } from "./label-BYkfzCCt.js";
import { t as Textarea } from "./textarea-gXWoX4SP.js";
//#region src/pages/admin/Emails.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function AdminEmails() {
	const [subject, setSubject] = (0, import_react.useState)("");
	const [body, setBody] = (0, import_react.useState)("");
	const { toast } = useToast();
	(0, import_react.useEffect)(() => {
		const settings = getEmailSettings();
		setSubject(settings.welcomeSubject);
		setBody(settings.welcomeBody);
	}, []);
	const handleSave = () => {
		saveEmailSettings({
			welcomeSubject: subject,
			welcomeBody: body
		});
		toast({
			title: "Configurações salvas",
			description: "O template de e-mail foi atualizado com sucesso."
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/admin/Emails.tsx:31:5",
		"data-prohibitions": "[]",
		className: "max-w-3xl animate-fade-in",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/admin/Emails.tsx:32:7",
			"data-prohibitions": "[]",
			className: "mb-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				"data-uid": "src/pages/admin/Emails.tsx:33:9",
				"data-prohibitions": "[]",
				className: "text-3xl font-heading font-bold mb-1",
				children: "E-mails Automáticos"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				"data-uid": "src/pages/admin/Emails.tsx:34:9",
				"data-prohibitions": "[]",
				className: "text-muted-foreground",
				children: "Configure as mensagens enviadas pelo sistema."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			"data-uid": "src/pages/admin/Emails.tsx:37:7",
			"data-prohibitions": "[]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
				"data-uid": "src/pages/admin/Emails.tsx:38:9",
				"data-prohibitions": "[]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					"data-uid": "src/pages/admin/Emails.tsx:39:11",
					"data-prohibitions": "[]",
					children: "E-mail de Boas-Vindas"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardDescription, {
					"data-uid": "src/pages/admin/Emails.tsx:40:11",
					"data-prohibitions": "[]",
					children: [
						"Enviado automaticamente para novos usuários cadastrados.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {
							"data-uid": "src/pages/admin/Emails.tsx:42:13",
							"data-prohibitions": "[editContent]",
							className: "mb-2"
						}),
						"Tags dinâmicas permitidas:",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
							"data-uid": "src/pages/admin/Emails.tsx:44:13",
							"data-prohibitions": "[]",
							className: "bg-muted px-1 py-0.5 rounded text-xs",
							children: "{{customer_name}}"
						}),
						",",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
							"data-uid": "src/pages/admin/Emails.tsx:45:13",
							"data-prohibitions": "[]",
							className: "bg-muted px-1 py-0.5 rounded text-xs",
							children: "{{coupon_code}}"
						}),
						",",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
							"data-uid": "src/pages/admin/Emails.tsx:46:13",
							"data-prohibitions": "[]",
							className: "bg-muted px-1 py-0.5 rounded text-xs",
							children: "{{discount_percentage}}"
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				"data-uid": "src/pages/admin/Emails.tsx:51:9",
				"data-prohibitions": "[]",
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/admin/Emails.tsx:52:11",
						"data-prohibitions": "[]",
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							"data-uid": "src/pages/admin/Emails.tsx:53:13",
							"data-prohibitions": "[]",
							htmlFor: "subject",
							children: "Assunto do E-mail"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							"data-uid": "src/pages/admin/Emails.tsx:54:13",
							"data-prohibitions": "[editContent]",
							id: "subject",
							value: subject,
							onChange: (e) => setSubject(e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/admin/Emails.tsx:56:11",
						"data-prohibitions": "[]",
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							"data-uid": "src/pages/admin/Emails.tsx:57:13",
							"data-prohibitions": "[]",
							htmlFor: "body",
							children: "Corpo da Mensagem"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							"data-uid": "src/pages/admin/Emails.tsx:58:13",
							"data-prohibitions": "[editContent]",
							id: "body",
							rows: 8,
							value: body,
							onChange: (e) => setBody(e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						"data-uid": "src/pages/admin/Emails.tsx:60:11",
						"data-prohibitions": "[]",
						onClick: handleSave,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, {
							"data-uid": "src/pages/admin/Emails.tsx:61:13",
							"data-prohibitions": "[editContent]",
							className: "w-4 h-4 mr-2"
						}), "Salvar Alterações"]
					})
				]
			})]
		})]
	});
}
//#endregion
export { AdminEmails as default };

//# sourceMappingURL=Emails-DPzpRL56.js.map