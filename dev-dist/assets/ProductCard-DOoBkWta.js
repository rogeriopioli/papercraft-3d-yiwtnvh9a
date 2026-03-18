import { t as require_jsx_runtime } from "./jsx-runtime-Cd5rONqx.js";
import { n as useToast } from "./use-toast-CgSZLBKi.js";
import { t as cn } from "./utils-D00Et-ST.js";
import { t as createLucideIcon } from "./createLucideIcon-CtTukJS7.js";
import { t as ShoppingCart } from "./shopping-cart-5d0hNETV.js";
import { B as Badge, L as useWishlistStore, R as useCartStore, V as Button, ct as Link, it as Heart } from "./index-Ce5mAATO.js";
var Star = createLucideIcon("star", [["path", {
	d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
	key: "r04s7s"
}]]);
//#endregion
//#region src/components/ProductCard.tsx
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ product, className }) {
	const { hasItem, toggleItem } = useWishlistStore();
	const { addItem, setCartOpen } = useCartStore();
	const { toast } = useToast();
	const isFavorited = hasItem(product.id);
	const handleFavorite = (e) => {
		e.preventDefault();
		e.stopPropagation();
		toggleItem(product.id);
	};
	const handleAddToCart = (e) => {
		e.preventDefault();
		e.stopPropagation();
		addItem(product);
		setCartOpen(true);
		toast({
			title: "Adicionado ao carrinho",
			description: `${product.title} foi adicionado ao seu carrinho.`
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		"data-uid": "src/components/ProductCard.tsx:40:5",
		"data-prohibitions": "[editContent]",
		to: `/product/${product.id}`,
		className: cn("group flex flex-col", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/components/ProductCard.tsx:41:7",
			"data-prohibitions": "[editContent]",
			className: "relative aspect-[4/5] overflow-hidden rounded-lg mb-3 bg-muted isolate",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					"data-uid": "src/components/ProductCard.tsx:42:9",
					"data-prohibitions": "[editContent]",
					src: product.images[0],
					alt: product.title,
					className: cn("absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out", product.images.length > 1 ? "group-hover:opacity-0" : "")
				}),
				product.images.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					"data-uid": "src/components/ProductCard.tsx:51:11",
					"data-prohibitions": "[editContent]",
					src: product.images[1],
					alt: `${product.title} - Vista Alternativa`,
					className: "absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-uid": "src/components/ProductCard.tsx:58:9",
					"data-prohibitions": "[editContent]",
					className: "absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/components/ProductCard.tsx:60:9",
					"data-prohibitions": "[editContent]",
					className: "absolute top-2 left-2 flex flex-col gap-1.5 z-10",
					children: [product.isNew && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						"data-uid": "src/components/ProductCard.tsx:62:13",
						"data-prohibitions": "[]",
						className: "bg-white text-black hover:bg-white/90 shadow-sm border-none rounded-sm px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
						children: "Novo"
					}), product.isBestSeller && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						"data-uid": "src/components/ProductCard.tsx:67:13",
						"data-prohibitions": "[]",
						className: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm border-none rounded-sm px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
						children: "Mais Vendido"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"data-uid": "src/components/ProductCard.tsx:73:9",
					"data-prohibitions": "[editContent]",
					onClick: handleFavorite,
					className: "absolute top-2 right-2 z-20 p-2 rounded-full bg-background/50 backdrop-blur-md hover:bg-background/90 transition-all border border-transparent hover:border-border shadow-sm group/btn",
					"aria-label": isFavorited ? "Remover dos favoritos" : "Adicionar aos favoritos",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
						"data-uid": "src/components/ProductCard.tsx:78:11",
						"data-prohibitions": "[editContent]",
						className: cn("w-4 h-4 transition-colors", isFavorited ? "fill-red-500 text-red-500" : "text-foreground group-hover/btn:text-red-500")
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/components/ProductCard.tsx:89:7",
			"data-prohibitions": "[editContent]",
			className: "flex flex-col flex-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					"data-uid": "src/components/ProductCard.tsx:90:9",
					"data-prohibitions": "[editContent]",
					className: "text-sm font-medium leading-tight text-foreground line-clamp-2 mb-1 group-hover:underline decoration-muted-foreground/30 underline-offset-2",
					children: product.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/components/ProductCard.tsx:94:9",
					"data-prohibitions": "[editContent]",
					className: "flex items-center text-xs text-muted-foreground mb-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/components/ProductCard.tsx:95:11",
							"data-prohibitions": "[editContent]",
							className: "flex items-center font-medium text-foreground",
							children: [product.rating, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
								"data-uid": "src/components/ProductCard.tsx:97:13",
								"data-prohibitions": "[editContent]",
								className: "w-3.5 h-3.5 ml-1 fill-foreground"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"data-uid": "src/components/ProductCard.tsx:99:11",
							"data-prohibitions": "[]",
							className: "mx-2 opacity-50",
							children: "•"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"data-uid": "src/components/ProductCard.tsx:100:11",
							"data-prohibitions": "[editContent]",
							className: "truncate",
							children: product.category
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/components/ProductCard.tsx:103:9",
					"data-prohibitions": "[editContent]",
					className: "mt-1 flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						"data-uid": "src/components/ProductCard.tsx:104:11",
						"data-prohibitions": "[editContent]",
						className: "font-bold text-sm sm:text-base text-foreground shrink-0",
						children: ["R$ ", product.price.toFixed(2).replace(".", ",")]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						"data-uid": "src/components/ProductCard.tsx:107:11",
						"data-prohibitions": "[]",
						size: "sm",
						className: "h-8 px-2 sm:px-3 text-[10px] sm:text-xs shrink-0",
						onClick: handleAddToCart,
						title: "Adicionar ao carrinho",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, {
								"data-uid": "src/components/ProductCard.tsx:113:13",
								"data-prohibitions": "[editContent]",
								className: "w-3 h-3 mr-1 sm:w-3.5 sm:h-3.5 sm:mr-1.5"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"data-uid": "src/components/ProductCard.tsx:114:13",
								"data-prohibitions": "[]",
								className: "hidden sm:inline",
								children: "Adicionar ao carrinho"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"data-uid": "src/components/ProductCard.tsx:115:13",
								"data-prohibitions": "[]",
								className: "sm:hidden",
								children: "Adicionar"
							})
						]
					})]
				})
			]
		})]
	});
}
//#endregion
export { Star as n, ProductCard as t };

//# sourceMappingURL=ProductCard-DOoBkWta.js.map