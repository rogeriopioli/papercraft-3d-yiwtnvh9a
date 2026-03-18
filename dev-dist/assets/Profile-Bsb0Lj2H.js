import { a as __toESM, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-Cd5rONqx.js";
import "./react-dom-DbWmce7y.js";
import { n as useToast } from "./use-toast-CgSZLBKi.js";
import { t as createLucideIcon } from "./createLucideIcon-CtTukJS7.js";
import { t as ChevronRight } from "./chevron-right-fSbxG958.js";
import { t as CircleCheck } from "./circle-check-DsGVybC1.js";
import { n as Clock, t as FileText } from "./file-text-BOwO7KIU.js";
import { n as LogOut, t as Package } from "./package-NPIWbvmY.js";
import { B as Badge, L as useWishlistStore, V as Button, X as User, a as useUserStore, c as Card, ct as Link, d as CardHeader, f as CardTitle, it as Heart, l as CardContent, u as CardDescription, z as Input } from "./index-Ce5mAATO.js";
import { t as Label } from "./label-BYkfzCCt.js";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-DqjYsrMC.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-C_v99A__.js";
var Download = createLucideIcon("download", [
	["path", {
		d: "M12 15V3",
		key: "m9g1x1"
	}],
	["path", {
		d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
		key: "ih7n3h"
	}],
	["path", {
		d: "m7 10 5 5 5-5",
		key: "brsn70"
	}]
]);
var Receipt = createLucideIcon("receipt", [
	["path", {
		d: "M12 17V7",
		key: "pyj7ub"
	}],
	["path", {
		d: "M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8",
		key: "1elt7d"
	}],
	["path", {
		d: "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z",
		key: "ycz6yz"
	}]
]);
var Settings = createLucideIcon("settings", [["path", {
	d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
	key: "1i5ecw"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]);
//#endregion
//#region src/data/products.ts
var products = [];
//#endregion
//#region src/components/ProfileLibrary.tsx
var import_jsx_runtime = require_jsx_runtime();
function ProfileLibrary({ libraryProducts }) {
	const { toast } = useToast();
	const { downloadCounts, incrementDownload } = useUserStore();
	const handleDownload = (productId, fileType) => {
		const currentDownloads = downloadCounts[productId] || 0;
		if (currentDownloads >= 3) {
			toast({
				title: "Limite atingido",
				description: "Limite de downloads atingido (3/3). Compre novamente para reativar o acesso de download.",
				variant: "destructive"
			});
			return;
		}
		incrementDownload(productId);
		toast({
			title: "Download iniciado",
			description: `Baixando: ${fileType}. (${currentDownloads + 1}/3 downloads)`
		});
	};
	if (libraryProducts.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/components/ProfileLibrary.tsx:39:7",
		"data-prohibitions": "[]",
		className: "text-center py-16 bg-muted/30 rounded-2xl border border-dashed",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, {
				"data-uid": "src/components/ProfileLibrary.tsx:40:9",
				"data-prohibitions": "[editContent]",
				className: "w-12 h-12 text-muted-foreground/30 mx-auto mb-4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				"data-uid": "src/components/ProfileLibrary.tsx:41:9",
				"data-prohibitions": "[]",
				className: "text-xl font-medium mb-2",
				children: "Nenhum modelo adquirido"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				"data-uid": "src/components/ProfileLibrary.tsx:42:9",
				"data-prohibitions": "[]",
				className: "text-muted-foreground mb-6",
				children: "Você ainda não tem arquivos na sua biblioteca."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				"data-uid": "src/components/ProfileLibrary.tsx:43:9",
				"data-prohibitions": "[]",
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					"data-uid": "src/components/ProfileLibrary.tsx:44:11",
					"data-prohibitions": "[]",
					to: "/",
					children: "Explorar Catálogo"
				})
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-uid": "src/components/ProfileLibrary.tsx:51:5",
		"data-prohibitions": "[editContent]",
		className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
		children: libraryProducts.map((product, idx) => {
			const downloads = downloadCounts[product.id] || 0;
			const isLimitReached = downloads >= 3;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				"data-uid": "src/components/ProfileLibrary.tsx:57:11",
				"data-prohibitions": "[editContent]",
				className: "overflow-hidden flex flex-col group border-border/50 shadow-subtle hover:shadow-md transition-all relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/components/ProfileLibrary.tsx:61:13",
					"data-prohibitions": "[editContent]",
					className: "aspect-video relative bg-muted overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						"data-uid": "src/components/ProfileLibrary.tsx:62:15",
						"data-prohibitions": "[editContent]",
						src: product.images[0],
						alt: product.title,
						className: `w-full h-full object-cover transition-transform duration-500 ${isLimitReached ? "opacity-50 grayscale" : "group-hover:scale-105"}`
					}), idx === 0 && !isLimitReached && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						"data-uid": "src/components/ProfileLibrary.tsx:68:17",
						"data-prohibitions": "[]",
						className: "absolute top-3 left-3 bg-primary text-primary-foreground font-bold shadow-sm border-none uppercase tracking-wider text-[10px]",
						children: "Novo Arquivo"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					"data-uid": "src/components/ProfileLibrary.tsx:73:13",
					"data-prohibitions": "[editContent]",
					className: "p-5 flex-1 flex flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							"data-uid": "src/components/ProfileLibrary.tsx:74:15",
							"data-prohibitions": "[editContent]",
							className: "font-semibold text-lg line-clamp-1 mb-2 group-hover:text-primary transition-colors",
							children: product.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							"data-uid": "src/components/ProfileLibrary.tsx:77:15",
							"data-prohibitions": "[]",
							className: "text-sm text-muted-foreground mb-6",
							children: "Arquivos prontos para impressão e corte."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/components/ProfileLibrary.tsx:80:15",
							"data-prohibitions": "[editContent]",
							className: "flex flex-col gap-2 mt-auto",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									"data-uid": "src/components/ProfileLibrary.tsx:81:17",
									"data-prohibitions": "[editContent]",
									size: "sm",
									className: "w-full gap-2",
									disabled: isLimitReached,
									onClick: () => handleDownload(product.id, `${product.title} - Moldes PDF`),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
											"data-uid": "src/components/ProfileLibrary.tsx:87:19",
											"data-prohibitions": "[editContent]",
											className: "w-4 h-4"
										}),
										" Baixar Moldes (",
										downloads,
										"/3)"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									"data-uid": "src/components/ProfileLibrary.tsx:89:17",
									"data-prohibitions": "[editContent]",
									size: "sm",
									variant: "outline",
									className: "w-full gap-2",
									disabled: isLimitReached,
									onClick: () => handleDownload(product.id, `${product.title} - Instruções`),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
											"data-uid": "src/components/ProfileLibrary.tsx:96:19",
											"data-prohibitions": "[editContent]",
											className: "w-4 h-4"
										}),
										" Ver Instruções (",
										downloads,
										"/3)"
									]
								}),
								isLimitReached && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									"data-uid": "src/components/ProfileLibrary.tsx:99:19",
									"data-prohibitions": "[]",
									className: "text-[10px] text-destructive text-center mt-1 font-medium",
									children: "Limite de downloads atingido (3/3)."
								})
							]
						})
					]
				})]
			}, `${product.id}-${idx}`);
		})
	});
}
//#endregion
//#region src/components/ProfileOrders.tsx
function ProfileOrders({ orders }) {
	const { toast } = useToast();
	if (orders.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/components/ProfileOrders.tsx:25:7",
		"data-prohibitions": "[]",
		className: "text-center py-16 bg-muted/30 rounded-2xl border border-dashed",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
				"data-uid": "src/components/ProfileOrders.tsx:26:9",
				"data-prohibitions": "[editContent]",
				className: "w-12 h-12 text-muted-foreground/30 mx-auto mb-4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				"data-uid": "src/components/ProfileOrders.tsx:27:9",
				"data-prohibitions": "[]",
				className: "text-xl font-medium mb-2",
				children: "Nenhum pedido"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				"data-uid": "src/components/ProfileOrders.tsx:28:9",
				"data-prohibitions": "[]",
				className: "text-muted-foreground mb-6",
				children: "Você ainda não realizou nenhuma compra."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				"data-uid": "src/components/ProfileOrders.tsx:29:9",
				"data-prohibitions": "[]",
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					"data-uid": "src/components/ProfileOrders.tsx:30:11",
					"data-prohibitions": "[]",
					to: "/",
					children: "Começar a explorar"
				})
			})
		]
	});
	const handleDownloadReceipt = (orderId) => {
		toast({
			title: "Recibo Baixado",
			description: `O recibo do pedido ${orderId} foi baixado com sucesso.`
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-uid": "src/components/ProfileOrders.tsx:44:5",
		"data-prohibitions": "[editContent]",
		className: "border rounded-xl overflow-hidden bg-card shadow-subtle",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, {
			"data-uid": "src/components/ProfileOrders.tsx:45:7",
			"data-prohibitions": "[editContent]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
				"data-uid": "src/components/ProfileOrders.tsx:46:9",
				"data-prohibitions": "[]",
				className: "bg-muted/50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
					"data-uid": "src/components/ProfileOrders.tsx:47:11",
					"data-prohibitions": "[]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							"data-uid": "src/components/ProfileOrders.tsx:48:13",
							"data-prohibitions": "[]",
							className: "w-[120px]",
							children: "Pedido"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							"data-uid": "src/components/ProfileOrders.tsx:49:13",
							"data-prohibitions": "[]",
							children: "Data"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							"data-uid": "src/components/ProfileOrders.tsx:50:13",
							"data-prohibitions": "[]",
							children: "Itens"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							"data-uid": "src/components/ProfileOrders.tsx:51:13",
							"data-prohibitions": "[]",
							children: "Status"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							"data-uid": "src/components/ProfileOrders.tsx:52:13",
							"data-prohibitions": "[]",
							className: "text-right",
							children: "Total"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							"data-uid": "src/components/ProfileOrders.tsx:53:13",
							"data-prohibitions": "[]",
							className: "text-center w-[100px]",
							children: "Ações"
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, {
				"data-uid": "src/components/ProfileOrders.tsx:56:9",
				"data-prohibitions": "[editContent]",
				children: orders.map((order) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
					"data-uid": "src/components/ProfileOrders.tsx:58:13",
					"data-prohibitions": "[editContent]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							"data-uid": "src/components/ProfileOrders.tsx:59:15",
							"data-prohibitions": "[editContent]",
							className: "font-medium text-primary",
							children: order.id
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							"data-uid": "src/components/ProfileOrders.tsx:60:15",
							"data-prohibitions": "[editContent]",
							children: new Date(order.date).toLocaleDateString("pt-BR")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							"data-uid": "src/components/ProfileOrders.tsx:61:15",
							"data-prohibitions": "[editContent]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"data-uid": "src/components/ProfileOrders.tsx:62:17",
								"data-prohibitions": "[editContent]",
								className: "text-sm space-y-1",
								children: order.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/components/ProfileOrders.tsx:64:21",
									"data-prohibitions": "[editContent]",
									className: "truncate max-w-[200px] md:max-w-md text-muted-foreground",
									children: [
										item.quantity,
										"x ",
										item.title
									]
								}, item.productId))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							"data-uid": "src/components/ProfileOrders.tsx:73:15",
							"data-prohibitions": "[editContent]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								"data-uid": "src/components/ProfileOrders.tsx:74:17",
								"data-prohibitions": "[editContent]",
								variant: "secondary",
								className: "bg-green-100 text-green-800 hover:bg-green-100 flex items-center w-fit gap-1.5 border-none shadow-none font-medium",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
										"data-uid": "src/components/ProfileOrders.tsx:78:19",
										"data-prohibitions": "[editContent]",
										className: "w-3.5 h-3.5"
									}),
									" ",
									order.status
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
							"data-uid": "src/components/ProfileOrders.tsx:81:15",
							"data-prohibitions": "[editContent]",
							className: "text-right font-bold",
							children: ["R$ ", order.total.toFixed(2).replace(".", ",")]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							"data-uid": "src/components/ProfileOrders.tsx:84:15",
							"data-prohibitions": "[]",
							className: "text-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								"data-uid": "src/components/ProfileOrders.tsx:85:17",
								"data-prohibitions": "[]",
								variant: "ghost",
								size: "icon",
								title: "Ver recibo",
								onClick: () => handleDownloadReceipt(order.id),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Receipt, {
									"data-uid": "src/components/ProfileOrders.tsx:91:19",
									"data-prohibitions": "[editContent]",
									className: "w-4 h-4 text-muted-foreground"
								})
							})
						})
					]
				}, order.id))
			})]
		})
	});
}
//#endregion
//#region src/components/ProfileSettings.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
function ProfileSettings() {
	const { user, updateUser } = useUserStore();
	const { items: wishlistItems } = useWishlistStore();
	const { toast } = useToast();
	const [formData, setFormData] = (0, import_react.useState)({
		name: user.name,
		email: user.email
	});
	const [isSaving, setIsSaving] = (0, import_react.useState)(false);
	const handleSave = (e) => {
		e.preventDefault();
		setIsSaving(true);
		setTimeout(() => {
			updateUser(formData);
			setIsSaving(false);
			toast({
				title: "Perfil atualizado",
				description: "Suas informações foram salvas com sucesso."
			});
		}, 800);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/components/ProfileSettings.tsx:34:5",
		"data-prohibitions": "[editContent]",
		className: "grid md:grid-cols-2 gap-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			"data-uid": "src/components/ProfileSettings.tsx:35:7",
			"data-prohibitions": "[editContent]",
			className: "border-border/50 shadow-subtle",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
				"data-uid": "src/components/ProfileSettings.tsx:36:9",
				"data-prohibitions": "[]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					"data-uid": "src/components/ProfileSettings.tsx:37:11",
					"data-prohibitions": "[]",
					children: "Detalhes da Conta"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
					"data-uid": "src/components/ProfileSettings.tsx:38:11",
					"data-prohibitions": "[]",
					children: "Atualize suas informações pessoais."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
				"data-uid": "src/components/ProfileSettings.tsx:40:9",
				"data-prohibitions": "[editContent]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					"data-uid": "src/components/ProfileSettings.tsx:41:11",
					"data-prohibitions": "[editContent]",
					onSubmit: handleSave,
					className: "space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/components/ProfileSettings.tsx:42:13",
							"data-prohibitions": "[]",
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								"data-uid": "src/components/ProfileSettings.tsx:43:15",
								"data-prohibitions": "[]",
								htmlFor: "name",
								children: "Nome Completo"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								"data-uid": "src/components/ProfileSettings.tsx:44:15",
								"data-prohibitions": "[editContent]",
								id: "name",
								value: formData.name,
								onChange: (e) => setFormData({
									...formData,
									name: e.target.value
								}),
								required: true,
								className: "h-11"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/components/ProfileSettings.tsx:52:13",
							"data-prohibitions": "[]",
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								"data-uid": "src/components/ProfileSettings.tsx:53:15",
								"data-prohibitions": "[]",
								htmlFor: "email",
								children: "Endereço de E-mail"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								"data-uid": "src/components/ProfileSettings.tsx:54:15",
								"data-prohibitions": "[editContent]",
								id: "email",
								type: "email",
								value: formData.email,
								onChange: (e) => setFormData({
									...formData,
									email: e.target.value
								}),
								required: true,
								className: "h-11"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							"data-uid": "src/components/ProfileSettings.tsx:63:13",
							"data-prohibitions": "[editContent]",
							type: "submit",
							disabled: isSaving,
							className: "w-full h-11 text-base",
							children: isSaving ? "Salvando..." : "Salvar Alterações"
						})
					]
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			"data-uid": "src/components/ProfileSettings.tsx:70:7",
			"data-prohibitions": "[editContent]",
			className: "border-border/50 shadow-subtle bg-muted/30",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
				"data-uid": "src/components/ProfileSettings.tsx:71:9",
				"data-prohibitions": "[]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					"data-uid": "src/components/ProfileSettings.tsx:72:11",
					"data-prohibitions": "[]",
					children: "Resumo da Conta"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
					"data-uid": "src/components/ProfileSettings.tsx:73:11",
					"data-prohibitions": "[]",
					children: "Acesse outras áreas do seu perfil."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				"data-uid": "src/components/ProfileSettings.tsx:75:9",
				"data-prohibitions": "[editContent]",
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/components/ProfileSettings.tsx:76:11",
					"data-prohibitions": "[editContent]",
					className: "flex items-center justify-between p-4 bg-background rounded-lg border shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/components/ProfileSettings.tsx:77:13",
						"data-prohibitions": "[editContent]",
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"data-uid": "src/components/ProfileSettings.tsx:78:15",
							"data-prohibitions": "[]",
							className: "p-2 bg-primary/10 text-primary rounded-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
								"data-uid": "src/components/ProfileSettings.tsx:79:17",
								"data-prohibitions": "[editContent]",
								className: "w-5 h-5"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/components/ProfileSettings.tsx:81:15",
							"data-prohibitions": "[editContent]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								"data-uid": "src/components/ProfileSettings.tsx:82:17",
								"data-prohibitions": "[]",
								className: "font-medium text-sm",
								children: "Lista de Desejos"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								"data-uid": "src/components/ProfileSettings.tsx:83:17",
								"data-prohibitions": "[editContent]",
								className: "text-xs text-muted-foreground",
								children: [wishlistItems.length, " itens salvos"]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						"data-uid": "src/components/ProfileSettings.tsx:86:13",
						"data-prohibitions": "[]",
						variant: "outline",
						size: "sm",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							"data-uid": "src/components/ProfileSettings.tsx:87:15",
							"data-prohibitions": "[]",
							to: "/wishlist",
							children: "Ver Lista"
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-uid": "src/components/ProfileSettings.tsx:91:11",
					"data-prohibitions": "[]",
					className: "pt-4 mt-2 border-t",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						"data-uid": "src/components/ProfileSettings.tsx:92:13",
						"data-prohibitions": "[]",
						variant: "outline",
						className: "w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10 h-11 border-destructive/20",
						onClick: () => toast({ title: "Sessão encerrada" }),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, {
							"data-uid": "src/components/ProfileSettings.tsx:97:15",
							"data-prohibitions": "[editContent]",
							className: "w-4 h-4 mr-2"
						}), " Encerrar Sessão"]
					})
				})]
			})]
		})]
	});
}
//#endregion
//#region src/pages/Profile.tsx
function Profile() {
	const { user, orders, library } = useUserStore();
	const libraryProducts = library.map((id) => products.find((p) => p.id === id)).filter((p) => p !== void 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/Profile.tsx:18:5",
		"data-prohibitions": "[editContent]",
		className: "container mx-auto px-4 py-8 max-w-6xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"data-uid": "src/pages/Profile.tsx:19:7",
				"data-prohibitions": "[]",
				className: "flex items-center text-sm text-muted-foreground mb-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						"data-uid": "src/pages/Profile.tsx:20:9",
						"data-prohibitions": "[]",
						to: "/",
						className: "hover:text-primary transition-colors",
						children: "Home"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
						"data-uid": "src/pages/Profile.tsx:23:9",
						"data-prohibitions": "[editContent]",
						className: "w-4 h-4 mx-1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"data-uid": "src/pages/Profile.tsx:24:9",
						"data-prohibitions": "[]",
						className: "text-foreground font-medium",
						children: "Meu Perfil"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/Profile.tsx:27:7",
				"data-prohibitions": "[editContent]",
				className: "flex flex-col md:flex-row gap-6 md:gap-8 items-start mb-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-uid": "src/pages/Profile.tsx:28:9",
					"data-prohibitions": "[]",
					className: "w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
						"data-uid": "src/pages/Profile.tsx:29:11",
						"data-prohibitions": "[editContent]",
						className: "w-10 h-10"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/Profile.tsx:31:9",
					"data-prohibitions": "[editContent]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						"data-uid": "src/pages/Profile.tsx:32:11",
						"data-prohibitions": "[editContent]",
						className: "text-3xl font-heading font-bold mb-2",
						children: ["Olá, ", user.name.split(" ")[0]]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"data-uid": "src/pages/Profile.tsx:33:11",
						"data-prohibitions": "[]",
						className: "text-muted-foreground text-lg",
						children: "Bem-vindo(a) à sua central de criatividade."
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
				"data-uid": "src/pages/Profile.tsx:39:7",
				"data-prohibitions": "[]",
				defaultValue: "library",
				className: "w-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
						"data-uid": "src/pages/Profile.tsx:40:9",
						"data-prohibitions": "[]",
						className: "grid w-full sm:w-auto grid-cols-3 mb-8 bg-muted/50 p-1 h-auto",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
								"data-uid": "src/pages/Profile.tsx:41:11",
								"data-prohibitions": "[]",
								value: "library",
								className: "gap-2 py-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, {
									"data-uid": "src/pages/Profile.tsx:42:13",
									"data-prohibitions": "[editContent]",
									className: "w-4 h-4 hidden sm:block"
								}), " Biblioteca"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
								"data-uid": "src/pages/Profile.tsx:44:11",
								"data-prohibitions": "[]",
								value: "orders",
								className: "gap-2 py-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
									"data-uid": "src/pages/Profile.tsx:45:13",
									"data-prohibitions": "[editContent]",
									className: "w-4 h-4 hidden sm:block"
								}), " Pedidos"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
								"data-uid": "src/pages/Profile.tsx:47:11",
								"data-prohibitions": "[]",
								value: "settings",
								className: "gap-2 py-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, {
									"data-uid": "src/pages/Profile.tsx:48:13",
									"data-prohibitions": "[editContent]",
									className: "w-4 h-4 hidden sm:block"
								}), " Conta"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						"data-uid": "src/pages/Profile.tsx:52:9",
						"data-prohibitions": "[]",
						value: "library",
						className: "space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							"data-uid": "src/pages/Profile.tsx:56:11",
							"data-prohibitions": "[]",
							className: "text-2xl font-heading font-semibold mb-4",
							children: "Minha Biblioteca de Arquivos"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileLibrary, {
							"data-uid": "src/pages/Profile.tsx:57:11",
							"data-prohibitions": "[editContent]",
							libraryProducts
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						"data-uid": "src/pages/Profile.tsx:60:9",
						"data-prohibitions": "[]",
						value: "orders",
						className: "space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							"data-uid": "src/pages/Profile.tsx:64:11",
							"data-prohibitions": "[]",
							className: "text-2xl font-heading font-semibold mb-4",
							children: "Meus Pedidos"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileOrders, {
							"data-uid": "src/pages/Profile.tsx:65:11",
							"data-prohibitions": "[editContent]",
							orders
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						"data-uid": "src/pages/Profile.tsx:68:9",
						"data-prohibitions": "[]",
						value: "settings",
						className: "space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileSettings, {
							"data-uid": "src/pages/Profile.tsx:72:11",
							"data-prohibitions": "[editContent]"
						})
					})
				]
			})
		]
	});
}
//#endregion
export { Profile as default };

//# sourceMappingURL=Profile-Bsb0Lj2H.js.map