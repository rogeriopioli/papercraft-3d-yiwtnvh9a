import { a as __toESM, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-Cd5rONqx.js";
import "./react-dom-DbWmce7y.js";
import { n as useToast } from "./use-toast-CgSZLBKi.js";
import { i as Primitive, l as createContextScope, n as useControllableState, u as composeEventHandlers } from "./dist-ByFQWGnF.js";
import { n as useComposedRefs } from "./dist-CPydXBq8.js";
import { t as Presence } from "./dist-DfXtMSD6.js";
import { t as cn } from "./utils-D00Et-ST.js";
import { t as createLucideIcon } from "./createLucideIcon-CtTukJS7.js";
import { t as ChevronRight } from "./chevron-right-fSbxG958.js";
import { t as CircleAlert } from "./circle-alert-B3UTJfkN.js";
import { t as CircleCheck } from "./circle-check-DsGVybC1.js";
import { $ as ShieldCheck, B as Badge, J as useSize, Q as ShoppingBag, R as useCartStore, V as Button, a as useUserStore, ct as Link, dt as useNavigate, g as useCouponStore, n as useAdminUserStore, r as useOrderStore, v as useDirection, y as Separator, z as Input } from "./index-Ce5mAATO.js";
import { t as Label } from "./label-BYkfzCCt.js";
import { n as Root, r as createRovingFocusGroupScope, t as Item } from "./dist-CqcXSUcU.js";
import { t as usePrevious } from "./dist-Cw_0hryk.js";
var Circle = createLucideIcon("circle", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}]]);
var Copy = createLucideIcon("copy", [["rect", {
	width: "14",
	height: "14",
	x: "8",
	y: "8",
	rx: "2",
	ry: "2",
	key: "17jyea"
}], ["path", {
	d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
	key: "zix9uf"
}]]);
var CreditCard = createLucideIcon("credit-card", [["rect", {
	width: "20",
	height: "14",
	x: "2",
	y: "5",
	rx: "2",
	key: "ynyp8z"
}], ["line", {
	x1: "2",
	x2: "22",
	y1: "10",
	y2: "10",
	key: "1b3vmo"
}]]);
var Lock = createLucideIcon("lock", [["rect", {
	width: "18",
	height: "11",
	x: "3",
	y: "11",
	rx: "2",
	ry: "2",
	key: "1w4ew1"
}], ["path", {
	d: "M7 11V7a5 5 0 0 1 10 0v4",
	key: "fwvmzm"
}]]);
var QrCode = createLucideIcon("qr-code", [
	["rect", {
		width: "5",
		height: "5",
		x: "3",
		y: "3",
		rx: "1",
		key: "1tu5fj"
	}],
	["rect", {
		width: "5",
		height: "5",
		x: "16",
		y: "3",
		rx: "1",
		key: "1v8r4q"
	}],
	["rect", {
		width: "5",
		height: "5",
		x: "3",
		y: "16",
		rx: "1",
		key: "1x03jg"
	}],
	["path", {
		d: "M21 16h-3a2 2 0 0 0-2 2v3",
		key: "177gqh"
	}],
	["path", {
		d: "M21 21v.01",
		key: "ents32"
	}],
	["path", {
		d: "M12 7v3a2 2 0 0 1-2 2H7",
		key: "8crl2c"
	}],
	["path", {
		d: "M3 12h.01",
		key: "nlz23k"
	}],
	["path", {
		d: "M12 3h.01",
		key: "n36tog"
	}],
	["path", {
		d: "M12 16v.01",
		key: "133mhm"
	}],
	["path", {
		d: "M16 12h1",
		key: "1slzba"
	}],
	["path", {
		d: "M21 12v.01",
		key: "1lwtk9"
	}],
	["path", {
		d: "M12 21v-1",
		key: "1880an"
	}]
]);
var Tag = createLucideIcon("tag", [["path", {
	d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
	key: "vktsd0"
}], ["circle", {
	cx: "7.5",
	cy: "7.5",
	r: ".5",
	fill: "currentColor",
	key: "kqv944"
}]]);
var Zap = createLucideIcon("zap", [["path", {
	d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
	key: "1xq2db"
}]]);
//#endregion
//#region ../../cache/modules/catalogo-papercraft-3d-b9437/node_modules/.pnpm/@radix-ui+react-radio-group@1.3.8_@types+react-dom@19.2.3_@types+react@19.2.14__@types+_cc2a70da647cefa06e7f90fd9b481f08/node_modules/@radix-ui/react-radio-group/dist/index.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var RADIO_NAME = "Radio";
var [createRadioContext, createRadioScope] = createContextScope(RADIO_NAME);
var [RadioProvider, useRadioContext] = createRadioContext(RADIO_NAME);
var Radio = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeRadio, name, checked = false, required, disabled, value = "on", onCheck, form, ...radioProps } = props;
	const [button, setButton] = import_react.useState(null);
	const composedRefs = useComposedRefs(forwardedRef, (node) => setButton(node));
	const hasConsumerStoppedPropagationRef = import_react.useRef(false);
	const isFormControl = button ? form || !!button.closest("form") : true;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioProvider, {
		scope: __scopeRadio,
		checked,
		disabled,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
			type: "button",
			role: "radio",
			"aria-checked": checked,
			"data-state": getState(checked),
			"data-disabled": disabled ? "" : void 0,
			disabled,
			value,
			...radioProps,
			ref: composedRefs,
			onClick: composeEventHandlers(props.onClick, (event) => {
				if (!checked) onCheck?.();
				if (isFormControl) {
					hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
					if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
				}
			})
		}), isFormControl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioBubbleInput, {
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
Radio.displayName = RADIO_NAME;
var INDICATOR_NAME = "RadioIndicator";
var RadioIndicator = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeRadio, forceMount, ...indicatorProps } = props;
	const context = useRadioContext(INDICATOR_NAME, __scopeRadio);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.checked,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
			"data-state": getState(context.checked),
			"data-disabled": context.disabled ? "" : void 0,
			...indicatorProps,
			ref: forwardedRef
		})
	});
});
RadioIndicator.displayName = INDICATOR_NAME;
var BUBBLE_INPUT_NAME = "RadioBubbleInput";
var RadioBubbleInput = import_react.forwardRef(({ __scopeRadio, control, checked, bubbles = true, ...props }, forwardedRef) => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.input, {
		type: "radio",
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
RadioBubbleInput.displayName = BUBBLE_INPUT_NAME;
function getState(checked) {
	return checked ? "checked" : "unchecked";
}
var ARROW_KEYS = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
];
var RADIO_GROUP_NAME = "RadioGroup";
var [createRadioGroupContext, createRadioGroupScope] = createContextScope(RADIO_GROUP_NAME, [createRovingFocusGroupScope, createRadioScope]);
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var useRadioScope = createRadioScope();
var [RadioGroupProvider, useRadioGroupContext] = createRadioGroupContext(RADIO_GROUP_NAME);
var RadioGroup$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeRadioGroup, name, defaultValue, value: valueProp, required = false, disabled = false, orientation, dir, loop = true, onValueChange, ...groupProps } = props;
	const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeRadioGroup);
	const direction = useDirection(dir);
	const [value, setValue] = useControllableState({
		prop: valueProp,
		defaultProp: defaultValue ?? null,
		onChange: onValueChange,
		caller: RADIO_GROUP_NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupProvider, {
		scope: __scopeRadioGroup,
		name,
		required,
		disabled,
		value,
		onValueChange: setValue,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
			asChild: true,
			...rovingFocusGroupScope,
			orientation,
			dir: direction,
			loop,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
				role: "radiogroup",
				"aria-required": required,
				"aria-orientation": orientation,
				"data-disabled": disabled ? "" : void 0,
				dir: direction,
				...groupProps,
				ref: forwardedRef
			})
		})
	});
});
RadioGroup$1.displayName = RADIO_GROUP_NAME;
var ITEM_NAME = "RadioGroupItem";
var RadioGroupItem$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeRadioGroup, disabled, ...itemProps } = props;
	const context = useRadioGroupContext(ITEM_NAME, __scopeRadioGroup);
	const isDisabled = context.disabled || disabled;
	const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeRadioGroup);
	const radioScope = useRadioScope(__scopeRadioGroup);
	const ref = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, ref);
	const checked = context.value === itemProps.value;
	const isArrowKeyPressedRef = import_react.useRef(false);
	import_react.useEffect(() => {
		const handleKeyDown = (event) => {
			if (ARROW_KEYS.includes(event.key)) isArrowKeyPressedRef.current = true;
		};
		const handleKeyUp = () => isArrowKeyPressedRef.current = false;
		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("keyup", handleKeyUp);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.removeEventListener("keyup", handleKeyUp);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
		asChild: true,
		...rovingFocusGroupScope,
		focusable: !isDisabled,
		active: checked,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, {
			disabled: isDisabled,
			required: context.required,
			checked,
			...radioScope,
			...itemProps,
			name: context.name,
			ref: composedRefs,
			onCheck: () => context.onValueChange(itemProps.value),
			onKeyDown: composeEventHandlers((event) => {
				if (event.key === "Enter") event.preventDefault();
			}),
			onFocus: composeEventHandlers(itemProps.onFocus, () => {
				if (isArrowKeyPressedRef.current) ref.current?.click();
			})
		})
	});
});
RadioGroupItem$1.displayName = ITEM_NAME;
var INDICATOR_NAME2 = "RadioGroupIndicator";
var RadioGroupIndicator = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeRadioGroup, ...indicatorProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioIndicator, {
		...useRadioScope(__scopeRadioGroup),
		...indicatorProps,
		ref: forwardedRef
	});
});
RadioGroupIndicator.displayName = INDICATOR_NAME2;
var Root2 = RadioGroup$1;
var Item2 = RadioGroupItem$1;
var Indicator = RadioGroupIndicator;
//#endregion
//#region src/components/ui/radio-group.tsx
var RadioGroup = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2, {
		"data-uid": "src/components/ui/radio-group.tsx:12:10",
		"data-prohibitions": "[editContent]",
		className: cn("grid gap-2", className),
		...props,
		ref
	});
});
RadioGroup.displayName = Root2.displayName;
var RadioGroupItem = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
		"data-uid": "src/components/ui/radio-group.tsx:21:5",
		"data-prohibitions": "[editContent]",
		ref,
		className: cn("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Indicator, {
			"data-uid": "src/components/ui/radio-group.tsx:29:7",
			"data-prohibitions": "[]",
			className: "flex items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, {
				"data-uid": "src/components/ui/radio-group.tsx:30:9",
				"data-prohibitions": "[editContent]",
				className: "h-2.5 w-2.5 fill-current text-current"
			})
		})
	});
});
RadioGroupItem.displayName = Item2.displayName;
//#endregion
//#region src/pages/Checkout.tsx
function Checkout() {
	const navigate = useNavigate();
	const { toast } = useToast();
	const { items: cartItems, clearCart } = useCartStore();
	const { addOrder, addPurchasedItems } = useUserStore();
	const { addOrder: addGlobalOrder, orders: globalOrders } = useOrderStore();
	const { coupons, updateCoupon } = useCouponStore();
	const { markUserAsRecurring } = useAdminUserStore();
	const [isSuccess, setIsSuccess] = (0, import_react.useState)(false);
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const [paymentMethod, setPaymentMethod] = (0, import_react.useState)("credit_card");
	const [pixKey, setPixKey] = (0, import_react.useState)("");
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [couponCode, setCouponCode] = (0, import_react.useState)("");
	const [autoAppliedEmail, setAutoAppliedEmail] = (0, import_react.useState)("");
	const [appliedDiscount, setAppliedDiscount] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let key = "00020126360014BR.GOV.BCB.PIX0114";
		const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		for (let i = 0; i < 35; i++) key += chars.charAt(Math.floor(Math.random() * 62));
		setPixKey(key);
	}, []);
	(0, import_react.useEffect)(() => {
		if (email && email.includes("@") && email !== autoAppliedEmail) {
			const hasPreviousOrders = globalOrders.some((o) => o.customerEmail.toLowerCase() === email.toLowerCase());
			if (!hasPreviousOrders && !appliedDiscount) {
				const welcomeCoupon = coupons.find((c) => c.isWelcomeCoupon && c.isActive);
				if (welcomeCoupon) {
					if (!(welcomeCoupon.expirationDate && new Date(welcomeCoupon.expirationDate) < new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0)))) {
						setAppliedDiscount({
							id: welcomeCoupon.id,
							code: welcomeCoupon.code,
							type: welcomeCoupon.type,
							value: welcomeCoupon.value
						});
						setCouponCode(welcomeCoupon.code);
						toast({
							title: "Desconto de Boas-Vindas!",
							description: "Como esta é sua primeira compra, aplicamos um desconto automaticamente."
						});
					}
				}
			} else if (hasPreviousOrders && appliedDiscount) {
				if (coupons.find((c) => c.id === appliedDiscount.id)?.isWelcomeCoupon) {
					setAppliedDiscount(null);
					setCouponCode("");
					toast({
						title: "Cupom removido",
						description: "O cupom de boas-vindas é válido apenas para a primeira compra.",
						variant: "destructive"
					});
				}
			}
			setAutoAppliedEmail(email);
		}
	}, [
		email,
		globalOrders,
		coupons,
		appliedDiscount,
		toast,
		autoAppliedEmail
	]);
	const checkoutItems = cartItems;
	const subtotal = checkoutItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
	const discountAmount = (0, import_react.useMemo)(() => {
		if (!appliedDiscount) return 0;
		if (appliedDiscount.type === "percentage") return subtotal * (appliedDiscount.value / 100);
		return appliedDiscount.value;
	}, [appliedDiscount, subtotal]);
	const total = Math.max(0, subtotal - discountAmount);
	if (checkoutItems.length === 0 && !isSuccess) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/Checkout.tsx:120:7",
		"data-prohibitions": "[]",
		className: "container mx-auto px-4 py-20 text-center max-w-lg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {
				"data-uid": "src/pages/Checkout.tsx:121:9",
				"data-prohibitions": "[editContent]",
				className: "w-16 h-16 text-muted-foreground mx-auto mb-6 opacity-30"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				"data-uid": "src/pages/Checkout.tsx:122:9",
				"data-prohibitions": "[]",
				className: "text-2xl font-bold mb-4",
				children: "Nenhum produto selecionado"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				"data-uid": "src/pages/Checkout.tsx:123:9",
				"data-prohibitions": "[]",
				size: "lg",
				onClick: () => navigate("/"),
				children: "Voltar para a Loja"
			})
		]
	});
	const handleApplyCoupon = () => {
		if (appliedDiscount) {
			setAppliedDiscount(null);
			setCouponCode("");
			toast({
				title: "Cupom removido",
				description: "O desconto foi retirado do seu pedido."
			});
			return;
		}
		const code = couponCode.trim().toUpperCase();
		if (!code) return;
		const coupon = coupons.find((c) => c.code === code);
		if (coupon) {
			if (!coupon.isActive) {
				toast({
					title: "Cupom inativo",
					description: "Este cupom não está mais ativo.",
					variant: "destructive"
				});
				return;
			}
			if (coupon.expirationDate && new Date(coupon.expirationDate) < new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0))) {
				toast({
					title: "Cupom expirado",
					description: "A data de validade deste cupom já passou.",
					variant: "destructive"
				});
				return;
			}
			if (coupon.isWelcomeCoupon) {
				if (!email) {
					toast({
						title: "E-mail necessário",
						description: "Preencha seu e-mail antes de aplicar um cupom de boas-vindas.",
						variant: "destructive"
					});
					return;
				}
				if (globalOrders.some((o) => o.customerEmail.toLowerCase() === email.toLowerCase())) {
					toast({
						title: "Cupom inválido",
						description: "O cupom de boas-vindas é exclusivo para a primeira compra.",
						variant: "destructive"
					});
					return;
				}
			}
			setAppliedDiscount({
				id: coupon.id,
				code: coupon.code,
				type: coupon.type,
				value: coupon.value
			});
			toast({
				title: "Cupom aplicado!",
				description: "Desconto adicionado ao seu pedido."
			});
		} else toast({
			title: "Cupom inválido",
			description: "Verifique o código e tente novamente.",
			variant: "destructive"
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (appliedDiscount) {
			if (coupons.find((c) => c.id === appliedDiscount.id)?.isWelcomeCoupon) {
				if (globalOrders.some((o) => o.customerEmail.toLowerCase() === email.toLowerCase())) {
					toast({
						title: "Cupom inválido",
						description: "O cupom de boas-vindas é exclusivo para a primeira compra.",
						variant: "destructive"
					});
					return;
				}
			}
		}
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
			setIsSuccess(true);
			const orderId = `ORD-${Math.floor(1e3 + Math.random() * 9e3)}`;
			const orderDate = (/* @__PURE__ */ new Date()).toISOString();
			const mappedItems = checkoutItems.map((i) => ({
				productId: i.id,
				title: i.title,
				quantity: i.quantity,
				price: i.price
			}));
			if (appliedDiscount && appliedDiscount.id) {
				const coupon = coupons.find((c) => c.id === appliedDiscount.id);
				if (coupon) updateCoupon(coupon.id, { usageCount: coupon.usageCount + 1 });
			}
			addOrder({
				id: orderId,
				date: orderDate,
				total,
				status: "Concluído",
				items: mappedItems
			});
			addPurchasedItems(checkoutItems.map((i) => i.id));
			addGlobalOrder({
				id: orderId,
				date: orderDate,
				total,
				status: "Concluído",
				items: mappedItems,
				customerEmail: email || "não informado",
				customerName: name || "não informado",
				couponApplied: appliedDiscount ? appliedDiscount.code : null
			});
			markUserAsRecurring(email, name);
			clearCart();
			toast({
				title: "Pagamento Aprovado!",
				description: "Arquivos enviados para o seu e-mail."
			});
		}, 1500);
	};
	const handleCopyPix = () => {
		navigator.clipboard.writeText(pixKey);
		toast({
			title: "Chave copiada!",
			description: "Chave PIX copiada para a área de transferência."
		});
	};
	if (isSuccess) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/Checkout.tsx:279:7",
		"data-prohibitions": "[editContent]",
		className: "container mx-auto px-4 py-20 text-center max-w-lg animate-in fade-in zoom-in",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
				"data-uid": "src/pages/Checkout.tsx:280:9",
				"data-prohibitions": "[editContent]",
				className: "w-20 h-20 text-green-500 mx-auto mb-6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				"data-uid": "src/pages/Checkout.tsx:281:9",
				"data-prohibitions": "[]",
				className: "text-3xl font-bold mb-4",
				children: "Pagamento Aprovado!"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/Checkout.tsx:282:9",
				"data-prohibitions": "[editContent]",
				className: "bg-primary/5 p-6 rounded-xl border border-primary/20 mb-8 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					"data-uid": "src/pages/Checkout.tsx:283:11",
					"data-prohibitions": "[editContent]",
					className: "text-foreground mb-3 text-center",
					children: [
						"Um e-mail de confirmação foi enviado para",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							"data-uid": "src/pages/Checkout.tsx:285:13",
							"data-prohibitions": "[editContent]",
							className: "font-medium",
							children: email || "seu e-mail"
						}),
						" com os links para download dos seus arquivos."
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					"data-uid": "src/pages/Checkout.tsx:288:11",
					"data-prohibitions": "[]",
					className: "text-sm text-muted-foreground text-center",
					children: [
						"Eles também estão disponíveis na sua",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							"data-uid": "src/pages/Checkout.tsx:290:13",
							"data-prohibitions": "[]",
							to: "/profile",
							className: "text-primary hover:underline font-medium",
							children: "Biblioteca"
						}),
						". Lembre-se, há um ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							"data-uid": "src/pages/Checkout.tsx:293:32",
							"data-prohibitions": "[]",
							children: "limite de 3 downloads por arquivo"
						}),
						"."
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/Checkout.tsx:296:9",
				"data-prohibitions": "[]",
				className: "flex gap-4 justify-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					"data-uid": "src/pages/Checkout.tsx:297:11",
					"data-prohibitions": "[]",
					size: "lg",
					onClick: () => navigate("/profile"),
					children: "Ver Arquivos"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					"data-uid": "src/pages/Checkout.tsx:300:11",
					"data-prohibitions": "[]",
					size: "lg",
					variant: "outline",
					onClick: () => navigate("/"),
					children: "Explorar Mais"
				})]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/Checkout.tsx:309:5",
		"data-prohibitions": "[editContent]",
		className: "container mx-auto px-4 py-8 max-w-6xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"data-uid": "src/pages/Checkout.tsx:310:7",
				"data-prohibitions": "[]",
				className: "flex items-center text-sm text-muted-foreground mb-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						"data-uid": "src/pages/Checkout.tsx:311:9",
						"data-prohibitions": "[]",
						to: "/",
						className: "hover:text-primary",
						children: "Home"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
						"data-uid": "src/pages/Checkout.tsx:314:9",
						"data-prohibitions": "[editContent]",
						className: "w-4 h-4 mx-1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"data-uid": "src/pages/Checkout.tsx:315:9",
						"data-prohibitions": "[]",
						className: "text-foreground font-medium",
						children: "Finalizar Compra"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				"data-uid": "src/pages/Checkout.tsx:318:7",
				"data-prohibitions": "[]",
				className: "text-3xl font-bold mb-8",
				children: "Finalizar Compra"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/Checkout.tsx:320:7",
				"data-prohibitions": "[editContent]",
				className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-uid": "src/pages/Checkout.tsx:321:9",
					"data-prohibitions": "[editContent]",
					className: "lg:col-span-7 space-y-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						"data-uid": "src/pages/Checkout.tsx:322:11",
						"data-prohibitions": "[editContent]",
						id: "checkout-form",
						onSubmit: handleSubmit,
						className: "space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/Checkout.tsx:323:13",
							"data-prohibitions": "[]",
							className: "bg-card p-6 rounded-2xl border space-y-4 shadow-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									"data-uid": "src/pages/Checkout.tsx:324:15",
									"data-prohibitions": "[]",
									className: "text-xl font-semibold border-b pb-4",
									children: "Dados Pessoais"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/Checkout.tsx:325:15",
									"data-prohibitions": "[]",
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										"data-uid": "src/pages/Checkout.tsx:326:17",
										"data-prohibitions": "[]",
										children: "Nome Completo"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										"data-uid": "src/pages/Checkout.tsx:327:17",
										"data-prohibitions": "[editContent]",
										required: true,
										placeholder: "Ex: João da Silva",
										value: name,
										onChange: (e) => setName(e.target.value)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/Checkout.tsx:334:15",
									"data-prohibitions": "[]",
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										"data-uid": "src/pages/Checkout.tsx:335:17",
										"data-prohibitions": "[]",
										children: "E-mail (para recebimento dos arquivos)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										"data-uid": "src/pages/Checkout.tsx:336:17",
										"data-prohibitions": "[editContent]",
										required: true,
										type: "email",
										placeholder: "joao@exemplo.com",
										value: email,
										onChange: (e) => setEmail(e.target.value)
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/Checkout.tsx:346:13",
							"data-prohibitions": "[editContent]",
							className: "bg-card p-6 rounded-2xl border space-y-6 shadow-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/Checkout.tsx:347:15",
									"data-prohibitions": "[]",
									className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										"data-uid": "src/pages/Checkout.tsx:348:17",
										"data-prohibitions": "[]",
										className: "text-xl font-semibold flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
											"data-uid": "src/pages/Checkout.tsx:349:19",
											"data-prohibitions": "[editContent]",
											className: "w-5 h-5 text-green-600"
										}), " Pagamento Seguro"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/pages/Checkout.tsx:351:17",
										"data-prohibitions": "[]",
										className: "flex flex-wrap gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
											"data-uid": "src/pages/Checkout.tsx:352:19",
											"data-prohibitions": "[]",
											variant: "secondary",
											className: "bg-green-100 text-green-800 hover:bg-green-100 border-none shadow-none",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
												"data-uid": "src/pages/Checkout.tsx:356:21",
												"data-prohibitions": "[editContent]",
												className: "w-3 h-3 mr-1"
											}), " Criptografia SSL"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
											"data-uid": "src/pages/Checkout.tsx:358:19",
											"data-prohibitions": "[]",
											variant: "secondary",
											className: "bg-blue-100 text-blue-800 hover:bg-blue-100 border-none shadow-none",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, {
												"data-uid": "src/pages/Checkout.tsx:362:21",
												"data-prohibitions": "[editContent]",
												className: "w-3 h-3 mr-1"
											}), " Entrega Digital"]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioGroup, {
									"data-uid": "src/pages/Checkout.tsx:367:15",
									"data-prohibitions": "[editContent]",
									value: paymentMethod,
									onValueChange: (v) => setPaymentMethod(v),
									className: "grid sm:grid-cols-2 gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
										"data-uid": "src/pages/Checkout.tsx:372:17",
										"data-prohibitions": "[editContent]",
										htmlFor: "cc",
										className: `border rounded-xl p-4 flex items-center gap-3 cursor-pointer transition-colors ${paymentMethod === "credit_card" ? "border-primary bg-primary/5 ring-1 ring-primary" : "hover:bg-muted/50"}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, {
												"data-uid": "src/pages/Checkout.tsx:376:19",
												"data-prohibitions": "[editContent]",
												value: "credit_card",
												id: "cc"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, {
												"data-uid": "src/pages/Checkout.tsx:377:19",
												"data-prohibitions": "[editContent]",
												className: "w-5 h-5 text-muted-foreground"
											}),
											" Cartão de Crédito"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
										"data-uid": "src/pages/Checkout.tsx:379:17",
										"data-prohibitions": "[editContent]",
										htmlFor: "pix",
										className: `border rounded-xl p-4 flex items-center gap-3 cursor-pointer transition-colors ${paymentMethod === "pix" ? "border-primary bg-primary/5 ring-1 ring-primary" : "hover:bg-muted/50"}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, {
												"data-uid": "src/pages/Checkout.tsx:383:19",
												"data-prohibitions": "[editContent]",
												value: "pix",
												id: "pix"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, {
												"data-uid": "src/pages/Checkout.tsx:384:19",
												"data-prohibitions": "[editContent]",
												className: "w-5 h-5 text-muted-foreground"
											}),
											" PIX"
										]
									})]
								}),
								paymentMethod === "credit_card" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/Checkout.tsx:389:17",
									"data-prohibitions": "[]",
									className: "space-y-4 animate-in fade-in",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/pages/Checkout.tsx:390:19",
										"data-prohibitions": "[]",
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											"data-uid": "src/pages/Checkout.tsx:391:21",
											"data-prohibitions": "[]",
											children: "Número do Cartão"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											"data-uid": "src/pages/Checkout.tsx:392:21",
											"data-prohibitions": "[editContent]",
											required: true,
											placeholder: "0000 0000 0000 0000"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/pages/Checkout.tsx:394:19",
										"data-prohibitions": "[]",
										className: "grid grid-cols-2 gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											"data-uid": "src/pages/Checkout.tsx:395:21",
											"data-prohibitions": "[]",
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												"data-uid": "src/pages/Checkout.tsx:396:23",
												"data-prohibitions": "[]",
												children: "Validade"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												"data-uid": "src/pages/Checkout.tsx:397:23",
												"data-prohibitions": "[editContent]",
												required: true,
												placeholder: "MM/AA"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											"data-uid": "src/pages/Checkout.tsx:399:21",
											"data-prohibitions": "[]",
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												"data-uid": "src/pages/Checkout.tsx:400:23",
												"data-prohibitions": "[]",
												children: "CVV"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												"data-uid": "src/pages/Checkout.tsx:401:23",
												"data-prohibitions": "[editContent]",
												required: true,
												placeholder: "123"
											})]
										})]
									})]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/Checkout.tsx:406:17",
									"data-prohibitions": "[]",
									className: "bg-secondary/30 p-6 rounded-xl border border-dashed border-primary/30 text-center animate-in fade-in",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											"data-uid": "src/pages/Checkout.tsx:407:19",
											"data-prohibitions": "[]",
											className: "bg-white p-4 inline-block rounded-xl border shadow-sm mx-auto mb-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, {
												"data-uid": "src/pages/Checkout.tsx:408:21",
												"data-prohibitions": "[editContent]",
												className: "w-32 h-32 text-slate-800"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											"data-uid": "src/pages/Checkout.tsx:410:19",
											"data-prohibitions": "[]",
											className: "font-semibold mb-1",
											children: "Escaneie o QR Code ou copie a chave"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											"data-uid": "src/pages/Checkout.tsx:411:19",
											"data-prohibitions": "[]",
											className: "text-sm text-muted-foreground mb-4",
											children: "O pagamento será aprovado instantaneamente."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											"data-uid": "src/pages/Checkout.tsx:414:19",
											"data-prohibitions": "[]",
											className: "flex items-center gap-2 max-w-sm mx-auto",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												"data-uid": "src/pages/Checkout.tsx:415:21",
												"data-prohibitions": "[editContent]",
												value: pixKey,
												readOnly: true,
												className: "font-mono text-xs bg-background"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												"data-uid": "src/pages/Checkout.tsx:416:21",
												"data-prohibitions": "[]",
												type: "button",
												variant: "secondary",
												onClick: handleCopyPix,
												className: "shrink-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
													"data-uid": "src/pages/Checkout.tsx:422:23",
													"data-prohibitions": "[editContent]",
													className: "w-4 h-4 mr-2"
												}), "Copiar"]
											})]
										})
									]
								})
							]
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-uid": "src/pages/Checkout.tsx:432:9",
					"data-prohibitions": "[editContent]",
					className: "lg:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/Checkout.tsx:433:11",
						"data-prohibitions": "[editContent]",
						className: "bg-secondary/30 p-6 rounded-2xl border sticky top-24 shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								"data-uid": "src/pages/Checkout.tsx:434:13",
								"data-prohibitions": "[]",
								className: "text-xl font-semibold mb-6",
								children: "Resumo do Pedido"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"data-uid": "src/pages/Checkout.tsx:435:13",
								"data-prohibitions": "[editContent]",
								className: "space-y-4 mb-6 max-h-[30vh] overflow-y-auto pr-2",
								children: checkoutItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/Checkout.tsx:437:17",
									"data-prohibitions": "[editContent]",
									className: "flex gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										"data-uid": "src/pages/Checkout.tsx:438:19",
										"data-prohibitions": "[editContent]",
										src: item.images[0],
										alt: item.title,
										className: "w-16 h-16 rounded-lg object-cover border bg-background"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/pages/Checkout.tsx:443:19",
										"data-prohibitions": "[editContent]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												"data-uid": "src/pages/Checkout.tsx:444:21",
												"data-prohibitions": "[editContent]",
												className: "font-medium text-sm leading-tight",
												children: item.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												"data-uid": "src/pages/Checkout.tsx:445:21",
												"data-prohibitions": "[editContent]",
												className: "text-xs text-muted-foreground",
												children: ["Qtd: ", item.quantity]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												"data-uid": "src/pages/Checkout.tsx:446:21",
												"data-prohibitions": "[editContent]",
												className: "font-bold text-primary",
												children: ["R$ ", (item.price * item.quantity).toFixed(2).replace(".", ",")]
											})
										]
									})]
								}, item.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {
								"data-uid": "src/pages/Checkout.tsx:454:13",
								"data-prohibitions": "[editContent]",
								className: "my-6"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/Checkout.tsx:456:13",
								"data-prohibitions": "[editContent]",
								className: "space-y-3 mb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
									"data-uid": "src/pages/Checkout.tsx:457:15",
									"data-prohibitions": "[]",
									className: "text-sm flex items-center gap-2 mb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
										"data-uid": "src/pages/Checkout.tsx:458:17",
										"data-prohibitions": "[editContent]",
										className: "w-4 h-4"
									}), " Cupom de Desconto"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/Checkout.tsx:460:15",
									"data-prohibitions": "[editContent]",
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										"data-uid": "src/pages/Checkout.tsx:461:17",
										"data-prohibitions": "[editContent]",
										placeholder: "Ex: DESC10",
										value: couponCode,
										onChange: (e) => setCouponCode(e.target.value.toUpperCase()),
										disabled: !!appliedDiscount,
										className: "bg-background"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										"data-uid": "src/pages/Checkout.tsx:468:17",
										"data-prohibitions": "[editContent]",
										type: "button",
										variant: appliedDiscount ? "outline" : "secondary",
										onClick: handleApplyCoupon,
										children: appliedDiscount ? "Remover" : "Aplicar"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {
								"data-uid": "src/pages/Checkout.tsx:478:13",
								"data-prohibitions": "[editContent]",
								className: "my-6"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/Checkout.tsx:480:13",
								"data-prohibitions": "[editContent]",
								className: "space-y-3 mb-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/pages/Checkout.tsx:481:15",
										"data-prohibitions": "[editContent]",
										className: "flex justify-between text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"data-uid": "src/pages/Checkout.tsx:482:17",
											"data-prohibitions": "[]",
											children: "Subtotal"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											"data-uid": "src/pages/Checkout.tsx:483:17",
											"data-prohibitions": "[editContent]",
											children: ["R$ ", subtotal.toFixed(2).replace(".", ",")]
										})]
									}),
									appliedDiscount && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/pages/Checkout.tsx:486:17",
										"data-prohibitions": "[editContent]",
										className: "flex justify-between text-green-600 font-medium bg-green-50 dark:bg-green-950/20 px-3 py-2 rounded-lg -mx-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"data-uid": "src/pages/Checkout.tsx:487:19",
											"data-prohibitions": "[editContent]",
											children: coupons.find((c) => c.id === appliedDiscount.id)?.isWelcomeCoupon ? `Boas-Vindas (${appliedDiscount.code})` : `Desconto (${appliedDiscount.code})`
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											"data-uid": "src/pages/Checkout.tsx:492:19",
											"data-prohibitions": "[editContent]",
											children: ["- R$ ", discountAmount.toFixed(2).replace(".", ",")]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/pages/Checkout.tsx:495:15",
										"data-prohibitions": "[]",
										className: "flex justify-between text-green-600",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"data-uid": "src/pages/Checkout.tsx:496:17",
											"data-prohibitions": "[]",
											children: "Frete (Digital)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"data-uid": "src/pages/Checkout.tsx:497:17",
											"data-prohibitions": "[]",
											children: "Grátis"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/pages/Checkout.tsx:499:15",
										"data-prohibitions": "[editContent]",
										className: "flex justify-between text-xl font-bold pt-4 border-t",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"data-uid": "src/pages/Checkout.tsx:500:17",
											"data-prohibitions": "[]",
											children: "Total"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											"data-uid": "src/pages/Checkout.tsx:501:17",
											"data-prohibitions": "[editContent]",
											className: "text-primary",
											children: ["R$ ", total.toFixed(2).replace(".", ",")]
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/Checkout.tsx:505:13",
								"data-prohibitions": "[]",
								className: "bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-xl p-4 mb-6 flex gap-3 text-sm text-amber-800 dark:text-amber-200 shadow-sm animate-in fade-in",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, {
									"data-uid": "src/pages/Checkout.tsx:506:15",
									"data-prohibitions": "[editContent]",
									className: "w-5 h-5 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/Checkout.tsx:507:15",
									"data-prohibitions": "[]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										"data-uid": "src/pages/Checkout.tsx:508:17",
										"data-prohibitions": "[]",
										className: "block font-semibold mb-1",
										children: "Política de Reembolso"
									}), "Por se tratar de um arquivo digital (não sendo enviado nenhum produto físico), não aceitamos devoluções ou reembolsos após a compra."]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								"data-uid": "src/pages/Checkout.tsx:514:13",
								"data-prohibitions": "[editContent]",
								type: "submit",
								form: "checkout-form",
								size: "lg",
								className: "w-full h-14 text-lg transition-transform hover:scale-[1.02]",
								disabled: isLoading,
								children: isLoading ? "Processando..." : paymentMethod === "pix" ? "Simular Pagamento PIX" : "Confirmar Compra"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								"data-uid": "src/pages/Checkout.tsx:527:13",
								"data-prohibitions": "[]",
								className: "text-center flex items-center justify-center gap-2 text-sm text-muted-foreground mt-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
									"data-uid": "src/pages/Checkout.tsx:528:15",
									"data-prohibitions": "[editContent]",
									className: "w-4 h-4"
								}), " Pagamento 100% Seguro"]
							})
						]
					})
				})]
			})
		]
	});
}
//#endregion
export { Checkout as default };

//# sourceMappingURL=Checkout-DVIhVAYT.js.map