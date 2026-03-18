import { a as __toESM, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-Cd5rONqx.js";
import { n as useToast } from "./use-toast-CgSZLBKi.js";
import { t as ChevronRight } from "./chevron-right-fSbxG958.js";
import { t as LoaderCircle } from "./loader-circle-Ceb7piMS.js";
import { t as ProductCard } from "./ProductCard-DOoBkWta.js";
import { F as useProductStore, L as useWishlistStore, Q as ShoppingBag, R as useCartStore, V as Button, ct as Link, it as Heart } from "./index-Ce5mAATO.js";
//#region src/pages/Wishlist.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function Wishlist() {
	const { items } = useWishlistStore();
	const { addItem } = useCartStore();
	const { products, isLoading, fetchProducts } = useProductStore();
	const { toast } = useToast();
	(0, import_react.useEffect)(() => {
		fetchProducts();
	}, [fetchProducts]);
	const wishlistProducts = products.filter((p) => items.includes(p.id));
	const handleAddToCart = (product) => {
		addItem(product);
		toast({
			title: "Adicionado ao carrinho!",
			description: `${product.title} foi adicionado.`
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/Wishlist.tsx:32:5",
		"data-prohibitions": "[editContent]",
		className: "container mx-auto px-4 py-8 max-w-7xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"data-uid": "src/pages/Wishlist.tsx:33:7",
				"data-prohibitions": "[]",
				className: "flex items-center text-sm text-muted-foreground mb-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						"data-uid": "src/pages/Wishlist.tsx:34:9",
						"data-prohibitions": "[]",
						to: "/",
						className: "hover:text-primary transition-colors",
						children: "Home"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
						"data-uid": "src/pages/Wishlist.tsx:37:9",
						"data-prohibitions": "[editContent]",
						className: "w-4 h-4 mx-1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"data-uid": "src/pages/Wishlist.tsx:38:9",
						"data-prohibitions": "[]",
						className: "text-foreground font-medium truncate",
						children: "Lista de Desejos"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/Wishlist.tsx:41:7",
				"data-prohibitions": "[]",
				className: "mb-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					"data-uid": "src/pages/Wishlist.tsx:42:9",
					"data-prohibitions": "[]",
					className: "text-3xl md:text-5xl font-heading font-bold mb-4 text-foreground flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
						"data-uid": "src/pages/Wishlist.tsx:43:11",
						"data-prohibitions": "[editContent]",
						className: "w-8 h-8 md:w-10 md:h-10 text-primary fill-primary"
					}), "Minha Lista de Desejos"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					"data-uid": "src/pages/Wishlist.tsx:46:9",
					"data-prohibitions": "[]",
					className: "text-lg text-muted-foreground",
					children: "Seus modelos favoritos salvos para montar depois."
				})]
			}),
			isLoading && products.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-uid": "src/pages/Wishlist.tsx:52:9",
				"data-prohibitions": "[]",
				className: "flex items-center justify-center py-24 text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
					"data-uid": "src/pages/Wishlist.tsx:53:11",
					"data-prohibitions": "[editContent]",
					className: "w-8 h-8 animate-spin"
				})
			}) : wishlistProducts.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-uid": "src/pages/Wishlist.tsx:56:9",
				"data-prohibitions": "[editContent]",
				className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10",
				children: wishlistProducts.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/Wishlist.tsx:58:13",
					"data-prohibitions": "[]",
					className: "flex flex-col gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
						"data-uid": "src/pages/Wishlist.tsx:59:15",
						"data-prohibitions": "[editContent]",
						product
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						"data-uid": "src/pages/Wishlist.tsx:60:15",
						"data-prohibitions": "[]",
						onClick: () => handleAddToCart(product),
						className: "w-full mt-auto",
						variant: "secondary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {
							"data-uid": "src/pages/Wishlist.tsx:65:17",
							"data-prohibitions": "[editContent]",
							className: "w-4 h-4 mr-2"
						}), "Adicionar ao Carrinho"]
					})]
				}, product.id))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/Wishlist.tsx:72:9",
				"data-prohibitions": "[]",
				className: "text-center py-24 bg-muted/30 rounded-2xl border border-dashed animate-fade-in",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
						"data-uid": "src/pages/Wishlist.tsx:73:11",
						"data-prohibitions": "[editContent]",
						className: "w-16 h-16 text-muted-foreground/30 mx-auto mb-6"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						"data-uid": "src/pages/Wishlist.tsx:74:11",
						"data-prohibitions": "[]",
						className: "text-2xl font-heading font-semibold mb-3",
						children: "Sua lista está vazia"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"data-uid": "src/pages/Wishlist.tsx:75:11",
						"data-prohibitions": "[]",
						className: "text-muted-foreground mb-8 max-w-md mx-auto",
						children: "Explore nosso catálogo de modelos lowpoly e salve seus favoritos clicando no coração de cada produto."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						"data-uid": "src/pages/Wishlist.tsx:79:11",
						"data-prohibitions": "[]",
						size: "lg",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							"data-uid": "src/pages/Wishlist.tsx:80:13",
							"data-prohibitions": "[]",
							to: "/",
							children: "Explorar Catálogo"
						})
					})
				]
			})
		]
	});
}
//#endregion
export { Wishlist as default };

//# sourceMappingURL=Wishlist-Bc_j18Bz.js.map