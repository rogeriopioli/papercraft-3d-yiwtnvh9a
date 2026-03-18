import { a as __toESM, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-Cd5rONqx.js";
import "./react-dom-DbWmce7y.js";
import { n as useToast } from "./use-toast-CgSZLBKi.js";
import { i as Primitive, l as createContextScope, n as useControllableState, u as composeEventHandlers } from "./dist-ByFQWGnF.js";
import { n as useComposedRefs } from "./dist-CPydXBq8.js";
import "./es2015-2BKVf0y2.js";
import { t as cn } from "./utils-D00Et-ST.js";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-gPCD3JHR.js";
import { t as SquarePen } from "./square-pen-7VSc2wTx.js";
import { t as Ticket } from "./ticket-Dp4EgeM7.js";
import { B as Badge, J as useSize, V as Button, Z as Trash2, g as useCouponStore, tt as Plus, z as Input } from "./index-Ce5mAATO.js";
import { t as Label } from "./label-BYkfzCCt.js";
import { t as usePrevious } from "./dist-Cw_0hryk.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-C_v99A__.js";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-DJhwZFs-.js";
//#region ../../cache/modules/catalogo-papercraft-3d-b9437/node_modules/.pnpm/@radix-ui+react-switch@1.2.6_@types+react-dom@19.2.3_@types+react@19.2.14__@types+react_e3738c514c10df2ef7e24af5ee461853/node_modules/@radix-ui/react-switch/dist/index.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var SWITCH_NAME = "Switch";
var [createSwitchContext, createSwitchScope] = createContextScope(SWITCH_NAME);
var [SwitchProvider, useSwitchContext] = createSwitchContext(SWITCH_NAME);
var Switch$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeSwitch, name, checked: checkedProp, defaultChecked, required, disabled, value = "on", onCheckedChange, form, ...switchProps } = props;
	const [button, setButton] = import_react.useState(null);
	const composedRefs = useComposedRefs(forwardedRef, (node) => setButton(node));
	const hasConsumerStoppedPropagationRef = import_react.useRef(false);
	const isFormControl = button ? form || !!button.closest("form") : true;
	const [checked, setChecked] = useControllableState({
		prop: checkedProp,
		defaultProp: defaultChecked ?? false,
		onChange: onCheckedChange,
		caller: SWITCH_NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SwitchProvider, {
		scope: __scopeSwitch,
		checked,
		disabled,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
			type: "button",
			role: "switch",
			"aria-checked": checked,
			"aria-required": required,
			"data-state": getState(checked),
			"data-disabled": disabled ? "" : void 0,
			disabled,
			value,
			...switchProps,
			ref: composedRefs,
			onClick: composeEventHandlers(props.onClick, (event) => {
				setChecked((prevChecked) => !prevChecked);
				if (isFormControl) {
					hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
					if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
				}
			})
		}), isFormControl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchBubbleInput, {
			control: button,
			bubbles: !hasConsumerStoppedPropagationRef.current,
			name,
			value,
			checked,
			required,
			disabled,
			form,
			style: { transform: "translateX(-100%)" }
		})]
	});
});
Switch$1.displayName = SWITCH_NAME;
var THUMB_NAME = "SwitchThumb";
var SwitchThumb = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeSwitch, ...thumbProps } = props;
	const context = useSwitchContext(THUMB_NAME, __scopeSwitch);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		"data-state": getState(context.checked),
		"data-disabled": context.disabled ? "" : void 0,
		...thumbProps,
		ref: forwardedRef
	});
});
SwitchThumb.displayName = THUMB_NAME;
var BUBBLE_INPUT_NAME = "SwitchBubbleInput";
var SwitchBubbleInput = import_react.forwardRef(({ __scopeSwitch, control, checked, bubbles = true, ...props }, forwardedRef) => {
	const ref = import_react.useRef(null);
	const composedRefs = useComposedRefs(ref, forwardedRef);
	const prevChecked = usePrevious(checked);
	const controlSize = useSize(control);
	import_react.useEffect(() => {
		const input = ref.current;
		if (!input) return;
		const inputProto = window.HTMLInputElement.prototype;
		const setChecked = Object.getOwnPropertyDescriptor(inputProto, "checked").set;
		if (prevChecked !== checked && setChecked) {
			const event = new Event("click", { bubbles });
			setChecked.call(input, checked);
			input.dispatchEvent(event);
		}
	}, [
		prevChecked,
		checked,
		bubbles
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type: "checkbox",
		"aria-hidden": true,
		defaultChecked: checked,
		...props,
		tabIndex: -1,
		ref: composedRefs,
		style: {
			...props.style,
			...controlSize,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0
		}
	});
});
SwitchBubbleInput.displayName = BUBBLE_INPUT_NAME;
function getState(checked) {
	return checked ? "checked" : "unchecked";
}
var Root = Switch$1;
var Thumb = SwitchThumb;
//#endregion
//#region src/components/ui/switch.tsx
var Switch = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	"data-uid": "src/components/ui/switch.tsx:11:3",
	"data-prohibitions": "[editContent]",
	className: cn("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className),
	...props,
	ref,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thumb, {
		"data-uid": "src/components/ui/switch.tsx:19:5",
		"data-prohibitions": "[editContent]",
		className: cn("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")
	})
}));
Switch.displayName = Root.displayName;
//#endregion
//#region src/pages/admin/Coupons.tsx
function AdminCoupons() {
	const { coupons, addCoupon, updateCoupon, deleteCoupon } = useCouponStore();
	const { toast } = useToast();
	const [isFormOpen, setIsFormOpen] = (0, import_react.useState)(false);
	const [editingId, setEditingId] = (0, import_react.useState)(null);
	const [formData, setFormData] = (0, import_react.useState)({
		code: "",
		type: "percentage",
		value: 0,
		isActive: true,
		expirationDate: "",
		isWelcomeCoupon: false
	});
	const handleOpenNew = () => {
		setFormData({
			code: "",
			type: "percentage",
			value: 0,
			isActive: true,
			expirationDate: "",
			isWelcomeCoupon: false
		});
		setEditingId(null);
		setIsFormOpen(true);
	};
	const handleOpenEdit = (coupon) => {
		setFormData({ ...coupon });
		setEditingId(coupon.id);
		setIsFormOpen(true);
	};
	const handleSave = () => {
		if (!formData.code?.trim() || !formData.value) {
			toast({
				title: "Dados inválidos",
				description: "Por favor, preencha o código e o valor do desconto.",
				variant: "destructive"
			});
			return;
		}
		if (editingId) {
			updateCoupon(editingId, formData);
			toast({
				title: "Cupom atualizado",
				description: "As alterações foram salvas com sucesso."
			});
		} else {
			addCoupon(formData);
			toast({
				title: "Cupom criado",
				description: "O novo cupom de desconto está pronto para uso."
			});
		}
		setIsFormOpen(false);
	};
	const handleDelete = (id) => {
		if (confirm("Deseja realmente excluir este cupom permanentemente?")) {
			deleteCoupon(id);
			toast({
				title: "Cupom removido",
				description: "O cupom foi excluído do sistema."
			});
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/admin/Coupons.tsx:100:5",
		"data-prohibitions": "[editContent]",
		className: "animate-fade-in",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/admin/Coupons.tsx:101:7",
				"data-prohibitions": "[]",
				className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/admin/Coupons.tsx:102:9",
					"data-prohibitions": "[]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						"data-uid": "src/pages/admin/Coupons.tsx:103:11",
						"data-prohibitions": "[]",
						className: "text-3xl font-heading font-bold mb-1",
						children: "Cupons de Desconto"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"data-uid": "src/pages/admin/Coupons.tsx:104:11",
						"data-prohibitions": "[]",
						className: "text-muted-foreground",
						children: "Gerencie promoções e descontos dinâmicos da loja."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					"data-uid": "src/pages/admin/Coupons.tsx:106:9",
					"data-prohibitions": "[]",
					onClick: handleOpenNew,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
						"data-uid": "src/pages/admin/Coupons.tsx:107:11",
						"data-prohibitions": "[editContent]",
						className: "w-4 h-4 mr-2"
					}), "Novo Cupom"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-uid": "src/pages/admin/Coupons.tsx:112:7",
				"data-prohibitions": "[editContent]",
				className: "bg-card rounded-xl border shadow-subtle overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, {
					"data-uid": "src/pages/admin/Coupons.tsx:113:9",
					"data-prohibitions": "[editContent]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
						"data-uid": "src/pages/admin/Coupons.tsx:114:11",
						"data-prohibitions": "[]",
						className: "bg-muted/50",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
							"data-uid": "src/pages/admin/Coupons.tsx:115:13",
							"data-prohibitions": "[]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									"data-uid": "src/pages/admin/Coupons.tsx:116:15",
									"data-prohibitions": "[]",
									children: "Código"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									"data-uid": "src/pages/admin/Coupons.tsx:117:15",
									"data-prohibitions": "[]",
									children: "Desconto"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									"data-uid": "src/pages/admin/Coupons.tsx:118:15",
									"data-prohibitions": "[]",
									children: "Validade"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									"data-uid": "src/pages/admin/Coupons.tsx:119:15",
									"data-prohibitions": "[]",
									children: "Status"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									"data-uid": "src/pages/admin/Coupons.tsx:120:15",
									"data-prohibitions": "[]",
									children: "Uso"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									"data-uid": "src/pages/admin/Coupons.tsx:121:15",
									"data-prohibitions": "[]",
									className: "text-right",
									children: "Ações"
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, {
						"data-uid": "src/pages/admin/Coupons.tsx:124:11",
						"data-prohibitions": "[editContent]",
						children: coupons.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, {
							"data-uid": "src/pages/admin/Coupons.tsx:126:15",
							"data-prohibitions": "[]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
								"data-uid": "src/pages/admin/Coupons.tsx:127:17",
								"data-prohibitions": "[]",
								colSpan: 6,
								className: "text-center py-12 text-muted-foreground flex-col items-center justify-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticket, {
									"data-uid": "src/pages/admin/Coupons.tsx:131:19",
									"data-prohibitions": "[editContent]",
									className: "w-8 h-8 mx-auto mb-3 text-muted-foreground/50"
								}), "Nenhum cupom cadastrado."]
							})
						}) : coupons.map((coupon) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
							"data-uid": "src/pages/admin/Coupons.tsx:137:17",
							"data-prohibitions": "[editContent]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									"data-uid": "src/pages/admin/Coupons.tsx:138:19",
									"data-prohibitions": "[editContent]",
									className: "font-bold text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/pages/admin/Coupons.tsx:139:21",
										"data-prohibitions": "[editContent]",
										className: "flex items-center gap-2",
										children: [coupon.code, coupon.isWelcomeCoupon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											"data-uid": "src/pages/admin/Coupons.tsx:141:50",
											"data-prohibitions": "[]",
											variant: "secondary",
											children: "Boas-Vindas"
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									"data-uid": "src/pages/admin/Coupons.tsx:144:19",
									"data-prohibitions": "[editContent]",
									className: "font-medium",
									children: coupon.type === "percentage" ? `${coupon.value}%` : `R$ ${coupon.value.toFixed(2).replace(".", ",")}`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									"data-uid": "src/pages/admin/Coupons.tsx:149:19",
									"data-prohibitions": "[editContent]",
									className: "text-muted-foreground",
									children: coupon.expirationDate ? new Date(new Date(coupon.expirationDate).getTime() + (/* @__PURE__ */ new Date()).getTimezoneOffset() * 6e4).toLocaleDateString("pt-BR") : "Vitalício"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									"data-uid": "src/pages/admin/Coupons.tsx:157:19",
									"data-prohibitions": "[editContent]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"data-uid": "src/pages/admin/Coupons.tsx:158:21",
										"data-prohibitions": "[editContent]",
										className: `inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${coupon.isActive ? "bg-green-500/10 text-green-600" : "bg-muted text-muted-foreground"}`,
										children: coupon.isActive ? "Ativo" : "Inativo"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
									"data-uid": "src/pages/admin/Coupons.tsx:168:19",
									"data-prohibitions": "[editContent]",
									className: "text-muted-foreground",
									children: [coupon.usageCount, " vezes"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									"data-uid": "src/pages/admin/Coupons.tsx:169:19",
									"data-prohibitions": "[]",
									className: "text-right",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/pages/admin/Coupons.tsx:170:21",
										"data-prohibitions": "[]",
										className: "flex justify-end gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											"data-uid": "src/pages/admin/Coupons.tsx:171:23",
											"data-prohibitions": "[]",
											variant: "secondary",
											size: "icon",
											className: "h-8 w-8",
											onClick: () => handleOpenEdit(coupon),
											title: "Editar Cupom",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, {
												"data-uid": "src/pages/admin/Coupons.tsx:178:25",
												"data-prohibitions": "[editContent]",
												className: "w-4 h-4"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											"data-uid": "src/pages/admin/Coupons.tsx:180:23",
											"data-prohibitions": "[]",
											variant: "destructive",
											size: "icon",
											className: "h-8 w-8",
											onClick: () => handleDelete(coupon.id),
											title: "Excluir Cupom",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
												"data-uid": "src/pages/admin/Coupons.tsx:187:25",
												"data-prohibitions": "[editContent]",
												className: "w-4 h-4"
											})
										})]
									})
								})
							]
						}, coupon.id))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				"data-uid": "src/pages/admin/Coupons.tsx:198:7",
				"data-prohibitions": "[editContent]",
				open: isFormOpen,
				onOpenChange: setIsFormOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					"data-uid": "src/pages/admin/Coupons.tsx:199:9",
					"data-prohibitions": "[editContent]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
							"data-uid": "src/pages/admin/Coupons.tsx:200:11",
							"data-prohibitions": "[editContent]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
								"data-uid": "src/pages/admin/Coupons.tsx:201:13",
								"data-prohibitions": "[editContent]",
								children: editingId ? "Editar Cupom" : "Criar Novo Cupom"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
								"data-uid": "src/pages/admin/Coupons.tsx:202:13",
								"data-prohibitions": "[]",
								children: "Defina as regras e o código para o seu cupom de desconto."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/admin/Coupons.tsx:207:11",
							"data-prohibitions": "[]",
							className: "space-y-4 py-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/admin/Coupons.tsx:208:13",
									"data-prohibitions": "[]",
									className: "grid grid-cols-2 gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/pages/admin/Coupons.tsx:209:15",
										"data-prohibitions": "[]",
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											"data-uid": "src/pages/admin/Coupons.tsx:210:17",
											"data-prohibitions": "[]",
											htmlFor: "code",
											children: "Código do Cupom"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											"data-uid": "src/pages/admin/Coupons.tsx:211:17",
											"data-prohibitions": "[editContent]",
											id: "code",
											value: formData.code,
											onChange: (e) => setFormData({
												...formData,
												code: e.target.value.toUpperCase().replace(/\s/g, "")
											}),
											placeholder: "Ex: PROMO20",
											className: "uppercase"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/pages/admin/Coupons.tsx:224:15",
										"data-prohibitions": "[]",
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											"data-uid": "src/pages/admin/Coupons.tsx:225:17",
											"data-prohibitions": "[]",
											htmlFor: "expirationDate",
											children: "Data de Validade (Opcional)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											"data-uid": "src/pages/admin/Coupons.tsx:226:17",
											"data-prohibitions": "[editContent]",
											id: "expirationDate",
											type: "date",
											value: formData.expirationDate || "",
											onChange: (e) => setFormData({
												...formData,
												expirationDate: e.target.value
											})
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/admin/Coupons.tsx:235:13",
									"data-prohibitions": "[]",
									className: "grid grid-cols-2 gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/pages/admin/Coupons.tsx:236:15",
										"data-prohibitions": "[]",
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											"data-uid": "src/pages/admin/Coupons.tsx:237:17",
											"data-prohibitions": "[]",
											htmlFor: "type",
											children: "Tipo de Desconto"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											"data-uid": "src/pages/admin/Coupons.tsx:238:17",
											"data-prohibitions": "[]",
											value: formData.type,
											onValueChange: (v) => setFormData({
												...formData,
												type: v
											}),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
												"data-uid": "src/pages/admin/Coupons.tsx:244:19",
												"data-prohibitions": "[]",
												id: "type",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
													"data-uid": "src/pages/admin/Coupons.tsx:245:21",
													"data-prohibitions": "[editContent]"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
												"data-uid": "src/pages/admin/Coupons.tsx:247:19",
												"data-prohibitions": "[]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													"data-uid": "src/pages/admin/Coupons.tsx:248:21",
													"data-prohibitions": "[]",
													value: "percentage",
													children: "Porcentagem (%)"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													"data-uid": "src/pages/admin/Coupons.tsx:249:21",
													"data-prohibitions": "[]",
													value: "fixed",
													children: "Fixo (R$)"
												})]
											})]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/pages/admin/Coupons.tsx:254:15",
										"data-prohibitions": "[]",
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											"data-uid": "src/pages/admin/Coupons.tsx:255:17",
											"data-prohibitions": "[]",
											htmlFor: "value",
											children: "Valor"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											"data-uid": "src/pages/admin/Coupons.tsx:256:17",
											"data-prohibitions": "[editContent]",
											id: "value",
											type: "number",
											min: "0",
											step: "0.01",
											value: formData.value || "",
											onChange: (e) => setFormData({
												...formData,
												value: parseFloat(e.target.value) || 0
											}),
											placeholder: "0.00"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/admin/Coupons.tsx:270:13",
									"data-prohibitions": "[]",
									className: "flex items-center justify-between rounded-lg border p-4 bg-muted/30",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/pages/admin/Coupons.tsx:271:15",
										"data-prohibitions": "[]",
										className: "space-y-0.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											"data-uid": "src/pages/admin/Coupons.tsx:272:17",
											"data-prohibitions": "[]",
											className: "text-base cursor-pointer",
											htmlFor: "welcome",
											children: "Cupom de Boas-Vindas"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											"data-uid": "src/pages/admin/Coupons.tsx:275:17",
											"data-prohibitions": "[]",
											className: "text-sm text-muted-foreground",
											children: "Este cupom será enviado automaticamente para novos usuários cadastrados."
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
										"data-uid": "src/pages/admin/Coupons.tsx:279:15",
										"data-prohibitions": "[editContent]",
										id: "welcome",
										checked: formData.isWelcomeCoupon,
										onCheckedChange: (c) => setFormData({
											...formData,
											isWelcomeCoupon: c
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/admin/Coupons.tsx:286:13",
									"data-prohibitions": "[]",
									className: "flex items-center justify-between rounded-lg border p-4 bg-muted/30",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/pages/admin/Coupons.tsx:287:15",
										"data-prohibitions": "[]",
										className: "space-y-0.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											"data-uid": "src/pages/admin/Coupons.tsx:288:17",
											"data-prohibitions": "[]",
											className: "text-base cursor-pointer",
											htmlFor: "status",
											children: "Status do Cupom"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											"data-uid": "src/pages/admin/Coupons.tsx:291:17",
											"data-prohibitions": "[]",
											className: "text-sm text-muted-foreground",
											children: "Cupons inativos não podem ser resgatados em compras."
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
										"data-uid": "src/pages/admin/Coupons.tsx:295:15",
										"data-prohibitions": "[editContent]",
										id: "status",
										checked: formData.isActive,
										onCheckedChange: (c) => setFormData({
											...formData,
											isActive: c
										})
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
							"data-uid": "src/pages/admin/Coupons.tsx:303:11",
							"data-prohibitions": "[]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								"data-uid": "src/pages/admin/Coupons.tsx:304:13",
								"data-prohibitions": "[]",
								variant: "outline",
								onClick: () => setIsFormOpen(false),
								children: "Cancelar"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								"data-uid": "src/pages/admin/Coupons.tsx:307:13",
								"data-prohibitions": "[]",
								onClick: handleSave,
								children: "Salvar Cupom"
							})]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { AdminCoupons as default };

//# sourceMappingURL=Coupons-Cim0gQBL.js.map