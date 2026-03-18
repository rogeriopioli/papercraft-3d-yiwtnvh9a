import { a as __toESM, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-Cd5rONqx.js";
import "./react-dom-DbWmce7y.js";
import { n as useToast } from "./use-toast-CgSZLBKi.js";
import "./es2015-2BKVf0y2.js";
import { t as CircleAlert } from "./circle-alert-B3UTJfkN.js";
import { V as Button, c as Card, d as CardHeader, f as CardTitle, l as CardContent, s as useKnowledgeStore, z as Input } from "./index-Ce5mAATO.js";
import { n as AlertDescription, r as AlertTitle, t as Alert } from "./alert-BCE7PvJ6.js";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-DqjYsrMC.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-C_v99A__.js";
import { a as AlertDialogDescription, c as AlertDialogTitle, i as AlertDialogContent, n as AlertDialogAction, o as AlertDialogFooter, r as AlertDialogCancel, s as AlertDialogHeader, t as AlertDialog } from "./alert-dialog-YT7EK1Cn.js";
import { t as Textarea } from "./textarea-gXWoX4SP.js";
//#region src/pages/admin/KnowledgeBase.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function AdminKnowledgeBase() {
	const { faqs, addFaq, updateFaq, deleteFaq, entries, addEntry, updateEntry, deleteEntry, systemContext, setSystemContext } = useKnowledgeStore();
	const { toast } = useToast();
	const [editingFaqId, setEditingFaqId] = (0, import_react.useState)(null);
	const [faqQ, setFaqQ] = (0, import_react.useState)("");
	const [faqA, setFaqA] = (0, import_react.useState)("");
	const [editingEntryId, setEditingEntryId] = (0, import_react.useState)(null);
	const [entryT, setEntryT] = (0, import_react.useState)("");
	const [entryC, setEntryC] = (0, import_react.useState)("");
	const [deleteFaqId, setDeleteFaqId] = (0, import_react.useState)(null);
	const [deleteEntryId, setDeleteEntryId] = (0, import_react.useState)(null);
	const handleEditFaq = (f) => {
		setEditingFaqId(f.id);
		setFaqQ(f.question);
		setFaqA(f.answer);
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	const handleSaveFaq = (e) => {
		e.preventDefault();
		if (!faqQ || !faqA) {
			toast({
				title: "Preencha todos os campos.",
				variant: "destructive"
			});
			return;
		}
		if (editingFaqId) {
			updateFaq(editingFaqId, {
				question: faqQ,
				answer: faqA
			});
			toast({ title: "FAQ atualizado com sucesso!" });
		} else {
			addFaq({
				question: faqQ,
				answer: faqA
			});
			toast({ title: "Novo FAQ adicionado com sucesso!" });
		}
		setEditingFaqId(null);
		setFaqQ("");
		setFaqA("");
	};
	const confirmDeleteFaq = () => {
		if (deleteFaqId) {
			deleteFaq(deleteFaqId);
			toast({ title: "FAQ removido com sucesso!" });
		}
		setDeleteFaqId(null);
	};
	const handleEditEntry = (e) => {
		setEditingEntryId(e.id);
		setEntryT(e.title);
		setEntryC(e.content);
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	const handleSaveEntry = (e) => {
		e.preventDefault();
		if (!entryT || !entryC) {
			toast({
				title: "Preencha todos os campos.",
				variant: "destructive"
			});
			return;
		}
		if (editingEntryId) {
			updateEntry(editingEntryId, {
				title: entryT,
				content: entryC
			});
			toast({ title: "Regra atualizada com sucesso!" });
		} else {
			addEntry({
				title: entryT,
				content: entryC
			});
			toast({ title: "Nova regra adicionada com sucesso!" });
		}
		setEditingEntryId(null);
		setEntryT("");
		setEntryC("");
	};
	const confirmDeleteEntry = () => {
		if (deleteEntryId) {
			deleteEntry(deleteEntryId);
			toast({ title: "Regra removida com sucesso!" });
		}
		setDeleteEntryId(null);
	};
	const hasRefundPolicy = faqs.some((f) => f.question.toLowerCase().includes("reembolso") || f.question.toLowerCase().includes("devolução") || f.answer.toLowerCase().includes("reembolso") || f.answer.toLowerCase().includes("devolução"));
	const ensureRefundPolicy = () => {
		addFaq({
			question: "Qual a política de reembolso ou devolução?",
			answer: "Por se tratar de um arquivo digital (não sendo enviado nenhum produto físico), não aceitamos devoluções ou reembolsos após a compra."
		});
		toast({ title: "Política de reembolso adicionada!" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/admin/KnowledgeBase.tsx:141:5",
		"data-prohibitions": "[editContent]",
		className: "space-y-6 max-w-5xl animate-fade-in relative z-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				"data-uid": "src/pages/admin/KnowledgeBase.tsx:142:7",
				"data-prohibitions": "[]",
				className: "text-3xl font-bold tracking-tight",
				children: "Base de Conhecimento IA"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				"data-uid": "src/pages/admin/KnowledgeBase.tsx:144:7",
				"data-prohibitions": "[]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
					"data-uid": "src/pages/admin/KnowledgeBase.tsx:145:9",
					"data-prohibitions": "[]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						"data-uid": "src/pages/admin/KnowledgeBase.tsx:146:11",
						"data-prohibitions": "[]",
						children: "Instruções e Regras Base (Sistema)"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
					"data-uid": "src/pages/admin/KnowledgeBase.tsx:148:9",
					"data-prohibitions": "[]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						"data-uid": "src/pages/admin/KnowledgeBase.tsx:149:11",
						"data-prohibitions": "[editContent]",
						value: systemContext,
						onChange: (e) => setSystemContext(e.target.value),
						rows: 3,
						placeholder: "Instruções de tom de voz para a IA..."
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
				"data-uid": "src/pages/admin/KnowledgeBase.tsx:158:7",
				"data-prohibitions": "[editContent]",
				defaultValue: "faqs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
						"data-uid": "src/pages/admin/KnowledgeBase.tsx:159:9",
						"data-prohibitions": "[]",
						className: "mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							"data-uid": "src/pages/admin/KnowledgeBase.tsx:160:11",
							"data-prohibitions": "[]",
							value: "faqs",
							children: "FAQs Públicos"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							"data-uid": "src/pages/admin/KnowledgeBase.tsx:161:11",
							"data-prohibitions": "[]",
							value: "entries",
							children: "Regras e Contexto Privado"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						"data-uid": "src/pages/admin/KnowledgeBase.tsx:164:9",
						"data-prohibitions": "[editContent]",
						value: "faqs",
						className: "space-y-4",
						children: [
							!hasRefundPolicy && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Alert, {
								"data-uid": "src/pages/admin/KnowledgeBase.tsx:166:13",
								"data-prohibitions": "[]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, {
										"data-uid": "src/pages/admin/KnowledgeBase.tsx:167:15",
										"data-prohibitions": "[editContent]",
										className: "h-4 w-4"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertTitle, {
										"data-uid": "src/pages/admin/KnowledgeBase.tsx:168:15",
										"data-prohibitions": "[]",
										children: "Política Obrigatória Ausente"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDescription, {
										"data-uid": "src/pages/admin/KnowledgeBase.tsx:169:15",
										"data-prohibitions": "[]",
										className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"data-uid": "src/pages/admin/KnowledgeBase.tsx:170:17",
											"data-prohibitions": "[]",
											children: "A política de reembolso e devolução não foi encontrada. É recomendável mantê-la para garantir respostas precisas da IA."
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											"data-uid": "src/pages/admin/KnowledgeBase.tsx:174:17",
											"data-prohibitions": "[]",
											variant: "outline",
											size: "sm",
											onClick: ensureRefundPolicy,
											children: "Adicionar Política"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								"data-uid": "src/pages/admin/KnowledgeBase.tsx:181:11",
								"data-prohibitions": "[editContent]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
									"data-uid": "src/pages/admin/KnowledgeBase.tsx:182:13",
									"data-prohibitions": "[editContent]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
										"data-uid": "src/pages/admin/KnowledgeBase.tsx:183:15",
										"data-prohibitions": "[editContent]",
										children: editingFaqId ? "Editar FAQ" : "Adicionar FAQ"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
									"data-uid": "src/pages/admin/KnowledgeBase.tsx:185:13",
									"data-prohibitions": "[editContent]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
										"data-uid": "src/pages/admin/KnowledgeBase.tsx:186:15",
										"data-prohibitions": "[editContent]",
										onSubmit: handleSaveFaq,
										className: "flex flex-col gap-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												"data-uid": "src/pages/admin/KnowledgeBase.tsx:187:17",
												"data-prohibitions": "[editContent]",
												placeholder: "Pergunta",
												value: faqQ,
												onChange: (e) => setFaqQ(e.target.value),
												required: true
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
												"data-uid": "src/pages/admin/KnowledgeBase.tsx:193:17",
												"data-prohibitions": "[editContent]",
												placeholder: "Resposta (Suporta HTML básico)",
												value: faqA,
												onChange: (e) => setFaqA(e.target.value),
												rows: 4,
												required: true
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												"data-uid": "src/pages/admin/KnowledgeBase.tsx:200:17",
												"data-prohibitions": "[editContent]",
												className: "flex justify-end gap-2",
												children: [editingFaqId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													"data-uid": "src/pages/admin/KnowledgeBase.tsx:202:21",
													"data-prohibitions": "[]",
													type: "button",
													variant: "outline",
													onClick: () => {
														setEditingFaqId(null);
														setFaqQ("");
														setFaqA("");
													},
													children: "Cancelar"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													"data-uid": "src/pages/admin/KnowledgeBase.tsx:214:19",
													"data-prohibitions": "[]",
													type: "submit",
													children: "Salvar Alterações"
												})]
											})
										]
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
								"data-uid": "src/pages/admin/KnowledgeBase.tsx:219:11",
								"data-prohibitions": "[editContent]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, {
									"data-uid": "src/pages/admin/KnowledgeBase.tsx:220:13",
									"data-prohibitions": "[editContent]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
										"data-uid": "src/pages/admin/KnowledgeBase.tsx:221:15",
										"data-prohibitions": "[]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
											"data-uid": "src/pages/admin/KnowledgeBase.tsx:222:17",
											"data-prohibitions": "[]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
												"data-uid": "src/pages/admin/KnowledgeBase.tsx:223:19",
												"data-prohibitions": "[]",
												children: "Pergunta"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
												"data-uid": "src/pages/admin/KnowledgeBase.tsx:224:19",
												"data-prohibitions": "[]",
												className: "w-40 text-right",
												children: "Ações"
											})]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableBody, {
										"data-uid": "src/pages/admin/KnowledgeBase.tsx:227:15",
										"data-prohibitions": "[editContent]",
										children: [faqs.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
											"data-uid": "src/pages/admin/KnowledgeBase.tsx:229:19",
											"data-prohibitions": "[editContent]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
												"data-uid": "src/pages/admin/KnowledgeBase.tsx:230:21",
												"data-prohibitions": "[editContent]",
												className: "font-medium",
												children: f.question
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
												"data-uid": "src/pages/admin/KnowledgeBase.tsx:231:21",
												"data-prohibitions": "[]",
												className: "text-right space-x-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													"data-uid": "src/pages/admin/KnowledgeBase.tsx:232:23",
													"data-prohibitions": "[]",
													variant: "outline",
													size: "sm",
													onClick: () => handleEditFaq(f),
													children: "Editar"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													"data-uid": "src/pages/admin/KnowledgeBase.tsx:235:23",
													"data-prohibitions": "[]",
													variant: "destructive",
													size: "sm",
													onClick: () => setDeleteFaqId(f.id),
													children: "Excluir"
												})]
											})]
										}, f.id)), faqs.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, {
											"data-uid": "src/pages/admin/KnowledgeBase.tsx:242:19",
											"data-prohibitions": "[]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
												"data-uid": "src/pages/admin/KnowledgeBase.tsx:243:21",
												"data-prohibitions": "[]",
												colSpan: 2,
												className: "text-center",
												children: "Nenhum FAQ cadastrado."
											})
										})]
									})]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						"data-uid": "src/pages/admin/KnowledgeBase.tsx:253:9",
						"data-prohibitions": "[editContent]",
						value: "entries",
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							"data-uid": "src/pages/admin/KnowledgeBase.tsx:254:11",
							"data-prohibitions": "[editContent]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
								"data-uid": "src/pages/admin/KnowledgeBase.tsx:255:13",
								"data-prohibitions": "[editContent]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
									"data-uid": "src/pages/admin/KnowledgeBase.tsx:256:15",
									"data-prohibitions": "[editContent]",
									children: editingEntryId ? "Editar Regra" : "Adicionar Regra / Contexto Privado"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
								"data-uid": "src/pages/admin/KnowledgeBase.tsx:260:13",
								"data-prohibitions": "[editContent]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									"data-uid": "src/pages/admin/KnowledgeBase.tsx:261:15",
									"data-prohibitions": "[editContent]",
									onSubmit: handleSaveEntry,
									className: "flex flex-col gap-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											"data-uid": "src/pages/admin/KnowledgeBase.tsx:262:17",
											"data-prohibitions": "[editContent]",
											placeholder: "Título do Assunto",
											value: entryT,
											onChange: (e) => setEntryT(e.target.value),
											required: true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
											"data-uid": "src/pages/admin/KnowledgeBase.tsx:268:17",
											"data-prohibitions": "[editContent]",
											placeholder: "Conteúdo descritivo que a IA deve consultar...",
											value: entryC,
											onChange: (e) => setEntryC(e.target.value),
											rows: 4,
											required: true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											"data-uid": "src/pages/admin/KnowledgeBase.tsx:275:17",
											"data-prohibitions": "[editContent]",
											className: "flex justify-end gap-2",
											children: [editingEntryId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												"data-uid": "src/pages/admin/KnowledgeBase.tsx:277:21",
												"data-prohibitions": "[]",
												type: "button",
												variant: "outline",
												onClick: () => {
													setEditingEntryId(null);
													setEntryT("");
													setEntryC("");
												},
												children: "Cancelar"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												"data-uid": "src/pages/admin/KnowledgeBase.tsx:289:19",
												"data-prohibitions": "[]",
												type: "submit",
												children: "Salvar Alterações"
											})]
										})
									]
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							"data-uid": "src/pages/admin/KnowledgeBase.tsx:294:11",
							"data-prohibitions": "[editContent]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, {
								"data-uid": "src/pages/admin/KnowledgeBase.tsx:295:13",
								"data-prohibitions": "[editContent]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
									"data-uid": "src/pages/admin/KnowledgeBase.tsx:296:15",
									"data-prohibitions": "[]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
										"data-uid": "src/pages/admin/KnowledgeBase.tsx:297:17",
										"data-prohibitions": "[]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
											"data-uid": "src/pages/admin/KnowledgeBase.tsx:298:19",
											"data-prohibitions": "[]",
											children: "Título da Regra"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
											"data-uid": "src/pages/admin/KnowledgeBase.tsx:299:19",
											"data-prohibitions": "[]",
											className: "w-40 text-right",
											children: "Ações"
										})]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableBody, {
									"data-uid": "src/pages/admin/KnowledgeBase.tsx:302:15",
									"data-prohibitions": "[editContent]",
									children: [entries.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
										"data-uid": "src/pages/admin/KnowledgeBase.tsx:304:19",
										"data-prohibitions": "[editContent]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
											"data-uid": "src/pages/admin/KnowledgeBase.tsx:305:21",
											"data-prohibitions": "[editContent]",
											className: "font-medium",
											children: e.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
											"data-uid": "src/pages/admin/KnowledgeBase.tsx:306:21",
											"data-prohibitions": "[]",
											className: "text-right space-x-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												"data-uid": "src/pages/admin/KnowledgeBase.tsx:307:23",
												"data-prohibitions": "[]",
												variant: "outline",
												size: "sm",
												onClick: () => handleEditEntry(e),
												children: "Editar"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												"data-uid": "src/pages/admin/KnowledgeBase.tsx:310:23",
												"data-prohibitions": "[]",
												variant: "destructive",
												size: "sm",
												onClick: () => setDeleteEntryId(e.id),
												children: "Excluir"
											})]
										})]
									}, e.id)), entries.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, {
										"data-uid": "src/pages/admin/KnowledgeBase.tsx:321:19",
										"data-prohibitions": "[]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
											"data-uid": "src/pages/admin/KnowledgeBase.tsx:322:21",
											"data-prohibitions": "[]",
											colSpan: 2,
											className: "text-center",
											children: "Nenhuma regra cadastrada."
										})
									})]
								})]
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialog, {
				"data-uid": "src/pages/admin/KnowledgeBase.tsx:333:7",
				"data-prohibitions": "[]",
				open: !!deleteFaqId,
				onOpenChange: (open) => !open && setDeleteFaqId(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogContent, {
					"data-uid": "src/pages/admin/KnowledgeBase.tsx:334:9",
					"data-prohibitions": "[]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogHeader, {
						"data-uid": "src/pages/admin/KnowledgeBase.tsx:335:11",
						"data-prohibitions": "[]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTitle, {
							"data-uid": "src/pages/admin/KnowledgeBase.tsx:336:13",
							"data-prohibitions": "[]",
							children: "Excluir Pergunta Frequente?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogDescription, {
							"data-uid": "src/pages/admin/KnowledgeBase.tsx:337:13",
							"data-prohibitions": "[]",
							children: "Esta ação não pode ser desfeita. Tem certeza de que deseja remover este FAQ da base de conhecimento da loja?"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogFooter, {
						"data-uid": "src/pages/admin/KnowledgeBase.tsx:342:11",
						"data-prohibitions": "[]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel, {
							"data-uid": "src/pages/admin/KnowledgeBase.tsx:343:13",
							"data-prohibitions": "[]",
							children: "Cancelar"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogAction, {
							"data-uid": "src/pages/admin/KnowledgeBase.tsx:344:13",
							"data-prohibitions": "[]",
							onClick: confirmDeleteFaq,
							className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
							children: "Sim, Excluir"
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialog, {
				"data-uid": "src/pages/admin/KnowledgeBase.tsx:354:7",
				"data-prohibitions": "[]",
				open: !!deleteEntryId,
				onOpenChange: (open) => !open && setDeleteEntryId(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogContent, {
					"data-uid": "src/pages/admin/KnowledgeBase.tsx:355:9",
					"data-prohibitions": "[]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogHeader, {
						"data-uid": "src/pages/admin/KnowledgeBase.tsx:356:11",
						"data-prohibitions": "[]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTitle, {
							"data-uid": "src/pages/admin/KnowledgeBase.tsx:357:13",
							"data-prohibitions": "[]",
							children: "Excluir Regra Base?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogDescription, {
							"data-uid": "src/pages/admin/KnowledgeBase.tsx:358:13",
							"data-prohibitions": "[]",
							children: "Esta ação não pode ser desfeita. Isso removerá as orientações dadas à inteligência artificial sobre esse tópico."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogFooter, {
						"data-uid": "src/pages/admin/KnowledgeBase.tsx:363:11",
						"data-prohibitions": "[]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel, {
							"data-uid": "src/pages/admin/KnowledgeBase.tsx:364:13",
							"data-prohibitions": "[]",
							children: "Cancelar"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogAction, {
							"data-uid": "src/pages/admin/KnowledgeBase.tsx:365:13",
							"data-prohibitions": "[]",
							onClick: confirmDeleteEntry,
							className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
							children: "Sim, Excluir"
						})]
					})]
				})
			})
		]
	});
}
//#endregion
export { AdminKnowledgeBase as default };

//# sourceMappingURL=KnowledgeBase-DWnmETaT.js.map