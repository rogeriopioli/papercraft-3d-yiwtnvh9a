import { a as __toESM, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-Cd5rONqx.js";
import "./react-dom-DbWmce7y.js";
import { n as useToast } from "./use-toast-CgSZLBKi.js";
import { i as Primitive, l as createContextScope, n as useControllableState, u as composeEventHandlers } from "./dist-ByFQWGnF.js";
import { n as useComposedRefs } from "./dist-CPydXBq8.js";
import "./es2015-2BKVf0y2.js";
import { t as cn } from "./utils-D00Et-ST.js";
import { t as createLucideIcon } from "./createLucideIcon-CtTukJS7.js";
import { t as ArrowLeft } from "./arrow-left-DoMTnpzX.js";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-gPCD3JHR.js";
import { t as CircleQuestionMark } from "./circle-question-mark-BBbfw-aE.js";
import { n as Star, t as ProductCard } from "./ProductCard-DOoBkWta.js";
import { B as Badge, C as SheetTitle, F as useProductStore, J as useSize, S as SheetHeader, V as Button, _ as clamp, b as Sheet, ct as Link, et as Search, g as useCouponStore, h as sendWelcomeEmail, i as useCategoryStore, nt as Mail, rt as Hexagon, st as createCollection, t as useSubscriberStore, v as useDirection, w as SheetTrigger, x as SheetContent, z as Input } from "./index-Ce5mAATO.js";
import { t as Label } from "./label-BYkfzCCt.js";
import { t as usePrevious } from "./dist-Cw_0hryk.js";
var ArrowRight = createLucideIcon("arrow-right", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "m12 5 7 7-7 7",
	key: "xquz4c"
}]]);
var Funnel = createLucideIcon("funnel", [["path", {
	d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
	key: "sc7q7i"
}]]);
var Layers = createLucideIcon("layers", [
	["path", {
		d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
		key: "zw3jo"
	}],
	["path", {
		d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
		key: "1wduqc"
	}],
	["path", {
		d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
		key: "kqbvx6"
	}]
]);
var SlidersHorizontal = createLucideIcon("sliders-horizontal", [
	["path", {
		d: "M10 5H3",
		key: "1qgfaw"
	}],
	["path", {
		d: "M12 19H3",
		key: "yhmn1j"
	}],
	["path", {
		d: "M14 3v4",
		key: "1sua03"
	}],
	["path", {
		d: "M16 17v4",
		key: "1q0r14"
	}],
	["path", {
		d: "M21 12h-9",
		key: "1o4lsq"
	}],
	["path", {
		d: "M21 19h-5",
		key: "1rlt1p"
	}],
	["path", {
		d: "M21 5h-7",
		key: "1oszz2"
	}],
	["path", {
		d: "M8 10v4",
		key: "tgpxqk"
	}],
	["path", {
		d: "M8 12H3",
		key: "a7s4jb"
	}]
]);
//#endregion
//#region ../../cache/modules/catalogo-papercraft-3d-b9437/node_modules/.pnpm/@radix-ui+react-slider@1.3.6_@types+react-dom@19.2.3_@types+react@19.2.14__@types+react_c6a3fae91eb6750caf661d179680cb4a/node_modules/@radix-ui/react-slider/dist/index.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var PAGE_KEYS = ["PageUp", "PageDown"];
var ARROW_KEYS = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
];
var BACK_KEYS = {
	"from-left": [
		"Home",
		"PageDown",
		"ArrowDown",
		"ArrowLeft"
	],
	"from-right": [
		"Home",
		"PageDown",
		"ArrowDown",
		"ArrowRight"
	],
	"from-bottom": [
		"Home",
		"PageDown",
		"ArrowDown",
		"ArrowLeft"
	],
	"from-top": [
		"Home",
		"PageDown",
		"ArrowUp",
		"ArrowLeft"
	]
};
var SLIDER_NAME = "Slider";
var [Collection, useCollection, createCollectionScope] = createCollection(SLIDER_NAME);
var [createSliderContext, createSliderScope] = createContextScope(SLIDER_NAME, [createCollectionScope]);
var [SliderProvider, useSliderContext] = createSliderContext(SLIDER_NAME);
var Slider$1 = import_react.forwardRef((props, forwardedRef) => {
	const { name, min = 0, max = 100, step = 1, orientation = "horizontal", disabled = false, minStepsBetweenThumbs = 0, defaultValue = [min], value, onValueChange = () => {}, onValueCommit = () => {}, inverted = false, form, ...sliderProps } = props;
	const thumbRefs = import_react.useRef(/* @__PURE__ */ new Set());
	const valueIndexToChangeRef = import_react.useRef(0);
	const SliderOrientation = orientation === "horizontal" ? SliderHorizontal : SliderVertical;
	const [values = [], setValues] = useControllableState({
		prop: value,
		defaultProp: defaultValue,
		onChange: (value2) => {
			[...thumbRefs.current][valueIndexToChangeRef.current]?.focus();
			onValueChange(value2);
		}
	});
	const valuesBeforeSlideStartRef = import_react.useRef(values);
	function handleSlideStart(value2) {
		updateValues(value2, getClosestValueIndex(values, value2));
	}
	function handleSlideMove(value2) {
		updateValues(value2, valueIndexToChangeRef.current);
	}
	function handleSlideEnd() {
		const prevValue = valuesBeforeSlideStartRef.current[valueIndexToChangeRef.current];
		if (values[valueIndexToChangeRef.current] !== prevValue) onValueCommit(values);
	}
	function updateValues(value2, atIndex, { commit } = { commit: false }) {
		const decimalCount = getDecimalCount(step);
		const nextValue = clamp(roundValue(Math.round((value2 - min) / step) * step + min, decimalCount), [min, max]);
		setValues((prevValues = []) => {
			const nextValues = getNextSortedValues(prevValues, nextValue, atIndex);
			if (hasMinStepsBetweenValues(nextValues, minStepsBetweenThumbs * step)) {
				valueIndexToChangeRef.current = nextValues.indexOf(nextValue);
				const hasChanged = String(nextValues) !== String(prevValues);
				if (hasChanged && commit) onValueCommit(nextValues);
				return hasChanged ? nextValues : prevValues;
			} else return prevValues;
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderProvider, {
		scope: props.__scopeSlider,
		name,
		disabled,
		min,
		max,
		valueIndexToChangeRef,
		thumbs: thumbRefs.current,
		values,
		orientation,
		form,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Provider, {
			scope: props.__scopeSlider,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Slot, {
				scope: props.__scopeSlider,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderOrientation, {
					"aria-disabled": disabled,
					"data-disabled": disabled ? "" : void 0,
					...sliderProps,
					ref: forwardedRef,
					onPointerDown: composeEventHandlers(sliderProps.onPointerDown, () => {
						if (!disabled) valuesBeforeSlideStartRef.current = values;
					}),
					min,
					max,
					inverted,
					onSlideStart: disabled ? void 0 : handleSlideStart,
					onSlideMove: disabled ? void 0 : handleSlideMove,
					onSlideEnd: disabled ? void 0 : handleSlideEnd,
					onHomeKeyDown: () => !disabled && updateValues(min, 0, { commit: true }),
					onEndKeyDown: () => !disabled && updateValues(max, values.length - 1, { commit: true }),
					onStepKeyDown: ({ event, direction: stepDirection }) => {
						if (!disabled) {
							const multiplier = PAGE_KEYS.includes(event.key) || event.shiftKey && ARROW_KEYS.includes(event.key) ? 10 : 1;
							const atIndex = valueIndexToChangeRef.current;
							const value2 = values[atIndex];
							updateValues(value2 + step * multiplier * stepDirection, atIndex, { commit: true });
						}
					}
				})
			})
		})
	});
});
Slider$1.displayName = SLIDER_NAME;
var [SliderOrientationProvider, useSliderOrientationContext] = createSliderContext(SLIDER_NAME, {
	startEdge: "left",
	endEdge: "right",
	size: "width",
	direction: 1
});
var SliderHorizontal = import_react.forwardRef((props, forwardedRef) => {
	const { min, max, dir, inverted, onSlideStart, onSlideMove, onSlideEnd, onStepKeyDown, ...sliderProps } = props;
	const [slider, setSlider] = import_react.useState(null);
	const composedRefs = useComposedRefs(forwardedRef, (node) => setSlider(node));
	const rectRef = import_react.useRef(void 0);
	const direction = useDirection(dir);
	const isDirectionLTR = direction === "ltr";
	const isSlidingFromLeft = isDirectionLTR && !inverted || !isDirectionLTR && inverted;
	function getValueFromPointer(pointerPosition) {
		const rect = rectRef.current || slider.getBoundingClientRect();
		const value = linearScale([0, rect.width], isSlidingFromLeft ? [min, max] : [max, min]);
		rectRef.current = rect;
		return value(pointerPosition - rect.left);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderOrientationProvider, {
		scope: props.__scopeSlider,
		startEdge: isSlidingFromLeft ? "left" : "right",
		endEdge: isSlidingFromLeft ? "right" : "left",
		direction: isSlidingFromLeft ? 1 : -1,
		size: "width",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderImpl, {
			dir: direction,
			"data-orientation": "horizontal",
			...sliderProps,
			ref: composedRefs,
			style: {
				...sliderProps.style,
				["--radix-slider-thumb-transform"]: "translateX(-50%)"
			},
			onSlideStart: (event) => {
				const value = getValueFromPointer(event.clientX);
				onSlideStart?.(value);
			},
			onSlideMove: (event) => {
				const value = getValueFromPointer(event.clientX);
				onSlideMove?.(value);
			},
			onSlideEnd: () => {
				rectRef.current = void 0;
				onSlideEnd?.();
			},
			onStepKeyDown: (event) => {
				const isBackKey = BACK_KEYS[isSlidingFromLeft ? "from-left" : "from-right"].includes(event.key);
				onStepKeyDown?.({
					event,
					direction: isBackKey ? -1 : 1
				});
			}
		})
	});
});
var SliderVertical = import_react.forwardRef((props, forwardedRef) => {
	const { min, max, inverted, onSlideStart, onSlideMove, onSlideEnd, onStepKeyDown, ...sliderProps } = props;
	const sliderRef = import_react.useRef(null);
	const ref = useComposedRefs(forwardedRef, sliderRef);
	const rectRef = import_react.useRef(void 0);
	const isSlidingFromBottom = !inverted;
	function getValueFromPointer(pointerPosition) {
		const rect = rectRef.current || sliderRef.current.getBoundingClientRect();
		const value = linearScale([0, rect.height], isSlidingFromBottom ? [max, min] : [min, max]);
		rectRef.current = rect;
		return value(pointerPosition - rect.top);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderOrientationProvider, {
		scope: props.__scopeSlider,
		startEdge: isSlidingFromBottom ? "bottom" : "top",
		endEdge: isSlidingFromBottom ? "top" : "bottom",
		size: "height",
		direction: isSlidingFromBottom ? 1 : -1,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderImpl, {
			"data-orientation": "vertical",
			...sliderProps,
			ref,
			style: {
				...sliderProps.style,
				["--radix-slider-thumb-transform"]: "translateY(50%)"
			},
			onSlideStart: (event) => {
				const value = getValueFromPointer(event.clientY);
				onSlideStart?.(value);
			},
			onSlideMove: (event) => {
				const value = getValueFromPointer(event.clientY);
				onSlideMove?.(value);
			},
			onSlideEnd: () => {
				rectRef.current = void 0;
				onSlideEnd?.();
			},
			onStepKeyDown: (event) => {
				const isBackKey = BACK_KEYS[isSlidingFromBottom ? "from-bottom" : "from-top"].includes(event.key);
				onStepKeyDown?.({
					event,
					direction: isBackKey ? -1 : 1
				});
			}
		})
	});
});
var SliderImpl = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeSlider, onSlideStart, onSlideMove, onSlideEnd, onHomeKeyDown, onEndKeyDown, onStepKeyDown, ...sliderProps } = props;
	const context = useSliderContext(SLIDER_NAME, __scopeSlider);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		...sliderProps,
		ref: forwardedRef,
		onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
			if (event.key === "Home") {
				onHomeKeyDown(event);
				event.preventDefault();
			} else if (event.key === "End") {
				onEndKeyDown(event);
				event.preventDefault();
			} else if (PAGE_KEYS.concat(ARROW_KEYS).includes(event.key)) {
				onStepKeyDown(event);
				event.preventDefault();
			}
		}),
		onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
			const target = event.target;
			target.setPointerCapture(event.pointerId);
			event.preventDefault();
			if (context.thumbs.has(target)) target.focus();
			else onSlideStart(event);
		}),
		onPointerMove: composeEventHandlers(props.onPointerMove, (event) => {
			if (event.target.hasPointerCapture(event.pointerId)) onSlideMove(event);
		}),
		onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
			const target = event.target;
			if (target.hasPointerCapture(event.pointerId)) {
				target.releasePointerCapture(event.pointerId);
				onSlideEnd(event);
			}
		})
	});
});
var TRACK_NAME = "SliderTrack";
var SliderTrack = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeSlider, ...trackProps } = props;
	const context = useSliderContext(TRACK_NAME, __scopeSlider);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		"data-disabled": context.disabled ? "" : void 0,
		"data-orientation": context.orientation,
		...trackProps,
		ref: forwardedRef
	});
});
SliderTrack.displayName = TRACK_NAME;
var RANGE_NAME = "SliderRange";
var SliderRange = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeSlider, ...rangeProps } = props;
	const context = useSliderContext(RANGE_NAME, __scopeSlider);
	const orientation = useSliderOrientationContext(RANGE_NAME, __scopeSlider);
	const composedRefs = useComposedRefs(forwardedRef, import_react.useRef(null));
	const valuesCount = context.values.length;
	const percentages = context.values.map((value) => convertValueToPercentage(value, context.min, context.max));
	const offsetStart = valuesCount > 1 ? Math.min(...percentages) : 0;
	const offsetEnd = 100 - Math.max(...percentages);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		"data-orientation": context.orientation,
		"data-disabled": context.disabled ? "" : void 0,
		...rangeProps,
		ref: composedRefs,
		style: {
			...props.style,
			[orientation.startEdge]: offsetStart + "%",
			[orientation.endEdge]: offsetEnd + "%"
		}
	});
});
SliderRange.displayName = RANGE_NAME;
var THUMB_NAME = "SliderThumb";
var SliderThumb = import_react.forwardRef((props, forwardedRef) => {
	const getItems = useCollection(props.__scopeSlider);
	const [thumb, setThumb] = import_react.useState(null);
	const composedRefs = useComposedRefs(forwardedRef, (node) => setThumb(node));
	const index = import_react.useMemo(() => thumb ? getItems().findIndex((item) => item.ref.current === thumb) : -1, [getItems, thumb]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumbImpl, {
		...props,
		ref: composedRefs,
		index
	});
});
var SliderThumbImpl = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeSlider, index, name, ...thumbProps } = props;
	const context = useSliderContext(THUMB_NAME, __scopeSlider);
	const orientation = useSliderOrientationContext(THUMB_NAME, __scopeSlider);
	const [thumb, setThumb] = import_react.useState(null);
	const composedRefs = useComposedRefs(forwardedRef, (node) => setThumb(node));
	const isFormControl = thumb ? context.form || !!thumb.closest("form") : true;
	const size = useSize(thumb);
	const value = context.values[index];
	const percent = value === void 0 ? 0 : convertValueToPercentage(value, context.min, context.max);
	const label = getLabel(index, context.values.length);
	const orientationSize = size?.[orientation.size];
	const thumbInBoundsOffset = orientationSize ? getThumbInBoundsOffset(orientationSize, percent, orientation.direction) : 0;
	import_react.useEffect(() => {
		if (thumb) {
			context.thumbs.add(thumb);
			return () => {
				context.thumbs.delete(thumb);
			};
		}
	}, [thumb, context.thumbs]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		style: {
			transform: "var(--radix-slider-thumb-transform)",
			position: "absolute",
			[orientation.startEdge]: `calc(${percent}% + ${thumbInBoundsOffset}px)`
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.ItemSlot, {
			scope: props.__scopeSlider,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
				role: "slider",
				"aria-label": props["aria-label"] || label,
				"aria-valuemin": context.min,
				"aria-valuenow": value,
				"aria-valuemax": context.max,
				"aria-orientation": context.orientation,
				"data-orientation": context.orientation,
				"data-disabled": context.disabled ? "" : void 0,
				tabIndex: context.disabled ? void 0 : 0,
				...thumbProps,
				ref: composedRefs,
				style: value === void 0 ? { display: "none" } : props.style,
				onFocus: composeEventHandlers(props.onFocus, () => {
					context.valueIndexToChangeRef.current = index;
				})
			})
		}), isFormControl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderBubbleInput, {
			name: name ?? (context.name ? context.name + (context.values.length > 1 ? "[]" : "") : void 0),
			form: context.form,
			value
		}, index)]
	});
});
SliderThumb.displayName = THUMB_NAME;
var BUBBLE_INPUT_NAME = "RadioBubbleInput";
var SliderBubbleInput = import_react.forwardRef(({ __scopeSlider, value, ...props }, forwardedRef) => {
	const ref = import_react.useRef(null);
	const composedRefs = useComposedRefs(ref, forwardedRef);
	const prevValue = usePrevious(value);
	import_react.useEffect(() => {
		const input = ref.current;
		if (!input) return;
		const inputProto = window.HTMLInputElement.prototype;
		const setValue = Object.getOwnPropertyDescriptor(inputProto, "value").set;
		if (prevValue !== value && setValue) {
			const event = new Event("input", { bubbles: true });
			setValue.call(input, value);
			input.dispatchEvent(event);
		}
	}, [prevValue, value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.input, {
		style: { display: "none" },
		...props,
		ref: composedRefs,
		defaultValue: value
	});
});
SliderBubbleInput.displayName = BUBBLE_INPUT_NAME;
function getNextSortedValues(prevValues = [], nextValue, atIndex) {
	const nextValues = [...prevValues];
	nextValues[atIndex] = nextValue;
	return nextValues.sort((a, b) => a - b);
}
function convertValueToPercentage(value, min, max) {
	return clamp(100 / (max - min) * (value - min), [0, 100]);
}
function getLabel(index, totalValues) {
	if (totalValues > 2) return `Value ${index + 1} of ${totalValues}`;
	else if (totalValues === 2) return ["Minimum", "Maximum"][index];
	else return;
}
function getClosestValueIndex(values, nextValue) {
	if (values.length === 1) return 0;
	const distances = values.map((value) => Math.abs(value - nextValue));
	const closestDistance = Math.min(...distances);
	return distances.indexOf(closestDistance);
}
function getThumbInBoundsOffset(width, left, direction) {
	const halfWidth = width / 2;
	return (halfWidth - linearScale([0, 50], [0, halfWidth])(left) * direction) * direction;
}
function getStepsBetweenValues(values) {
	return values.slice(0, -1).map((value, index) => values[index + 1] - value);
}
function hasMinStepsBetweenValues(values, minStepsBetweenValues) {
	if (minStepsBetweenValues > 0) {
		const stepsBetweenValues = getStepsBetweenValues(values);
		return Math.min(...stepsBetweenValues) >= minStepsBetweenValues;
	}
	return true;
}
function linearScale(input, output) {
	return (value) => {
		if (input[0] === input[1] || output[0] === output[1]) return output[0];
		const ratio = (output[1] - output[0]) / (input[1] - input[0]);
		return output[0] + ratio * (value - input[0]);
	};
}
function getDecimalCount(value) {
	return (String(value).split(".")[1] || "").length;
}
function roundValue(value, decimalCount) {
	const rounder = Math.pow(10, decimalCount);
	return Math.round(value * rounder) / rounder;
}
var Root = Slider$1;
var Track = SliderTrack;
var Range = SliderRange;
var Thumb = SliderThumb;
//#endregion
//#region src/components/ui/slider.tsx
var Slider = (0, import_react.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root, {
	"data-uid": "src/components/ui/slider.tsx:10:3",
	"data-prohibitions": "[editContent]",
	ref,
	className: cn("relative flex w-full touch-none select-none items-center", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Track, {
		"data-uid": "src/components/ui/slider.tsx:15:5",
		"data-prohibitions": "[]",
		className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
			"data-uid": "src/components/ui/slider.tsx:16:7",
			"data-prohibitions": "[editContent]",
			className: "absolute h-full bg-primary"
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thumb, {
		"data-uid": "src/components/ui/slider.tsx:18:5",
		"data-prohibitions": "[editContent]",
		className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
	})]
}));
Slider.displayName = Root.displayName;
//#endregion
//#region src/components/FilterBar.tsx
function FilterBar({ filters, setFilters, categories }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/components/FilterBar.tsx:32:5",
		"data-prohibitions": "[editContent]",
		className: "flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center mb-8 bg-card p-4 rounded-xl shadow-subtle border border-border/50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/components/FilterBar.tsx:33:7",
			"data-prohibitions": "[editContent]",
			className: "w-full flex-1 min-w-0 overflow-x-auto pb-3 custom-scrollbar flex gap-2 items-center md:pr-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				"data-uid": "src/components/FilterBar.tsx:34:9",
				"data-prohibitions": "[editContent]",
				variant: filters.categoryId === "all" ? "default" : "secondary",
				className: cn("rounded-full whitespace-nowrap shadow-none shrink-0"),
				onClick: () => setFilters((prev) => ({
					...prev,
					categoryId: "all"
				})),
				children: "Todos"
			}), categories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				"data-uid": "src/components/FilterBar.tsx:42:11",
				"data-prohibitions": "[editContent]",
				variant: filters.categoryId === cat.id ? "default" : "secondary",
				className: cn("rounded-full whitespace-nowrap shadow-none shrink-0"),
				onClick: () => setFilters((prev) => ({
					...prev,
					categoryId: cat.id
				})),
				children: cat.name
			}, cat.id))]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/components/FilterBar.tsx:53:7",
			"data-prohibitions": "[editContent]",
			className: "w-full md:w-auto flex items-center gap-3 justify-between md:justify-end shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-border/50 md:pl-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
				"data-uid": "src/components/FilterBar.tsx:54:9",
				"data-prohibitions": "[editContent]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
					"data-uid": "src/components/FilterBar.tsx:55:11",
					"data-prohibitions": "[editContent]",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						"data-uid": "src/components/FilterBar.tsx:56:13",
						"data-prohibitions": "[editContent]",
						variant: "outline",
						className: "gap-2 shrink-0 relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, {
								"data-uid": "src/components/FilterBar.tsx:57:15",
								"data-prohibitions": "[editContent]",
								className: "w-4 h-4"
							}),
							"Filtros",
							((filters.priceRange[1] !== void 0 ? filters.priceRange[1] : 200) < 200 || filters.difficulty) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"data-uid": "src/components/FilterBar.tsx:61:17",
								"data-prohibitions": "[]",
								className: "w-2 h-2 rounded-full bg-primary absolute top-2 right-2"
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
					"data-uid": "src/components/FilterBar.tsx:65:11",
					"data-prohibitions": "[editContent]",
					side: "right",
					className: "w-full sm:max-w-sm overflow-y-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, {
						"data-uid": "src/components/FilterBar.tsx:66:13",
						"data-prohibitions": "[]",
						className: "mb-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
							"data-uid": "src/components/FilterBar.tsx:67:15",
							"data-prohibitions": "[]",
							children: "Filtros Avançados"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/components/FilterBar.tsx:70:13",
						"data-prohibitions": "[editContent]",
						className: "space-y-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/components/FilterBar.tsx:71:15",
								"data-prohibitions": "[editContent]",
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/components/FilterBar.tsx:72:17",
										"data-prohibitions": "[editContent]",
										className: "flex justify-between items-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											"data-uid": "src/components/FilterBar.tsx:73:19",
											"data-prohibitions": "[]",
											className: "text-base",
											children: "Preço Máximo"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											"data-uid": "src/components/FilterBar.tsx:74:19",
											"data-prohibitions": "[editContent]",
											className: "font-semibold text-primary",
											children: ["R$ ", filters.priceRange[1] !== void 0 ? filters.priceRange[1] : 200]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
										"data-uid": "src/components/FilterBar.tsx:78:17",
										"data-prohibitions": "[editContent]",
										max: 200,
										step: 10,
										value: [filters.priceRange[1] !== void 0 ? filters.priceRange[1] : 200],
										onValueChange: (val) => setFilters((prev) => ({
											...prev,
											priceRange: [0, val[0]]
										}))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/components/FilterBar.tsx:86:17",
										"data-prohibitions": "[]",
										className: "flex justify-between text-xs text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"data-uid": "src/components/FilterBar.tsx:87:19",
											"data-prohibitions": "[]",
											children: "R$ 0"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"data-uid": "src/components/FilterBar.tsx:88:19",
											"data-prohibitions": "[]",
											children: "R$ 200+"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/components/FilterBar.tsx:92:15",
								"data-prohibitions": "[editContent]",
								className: "space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									"data-uid": "src/components/FilterBar.tsx:93:17",
									"data-prohibitions": "[]",
									className: "text-base",
									children: "Nível de Dificuldade"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									"data-uid": "src/components/FilterBar.tsx:94:17",
									"data-prohibitions": "[editContent]",
									className: "flex flex-wrap gap-2",
									children: [
										1,
										2,
										3,
										4,
										5
									].map((level) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
										"data-uid": "src/components/FilterBar.tsx:96:21",
										"data-prohibitions": "[editContent]",
										variant: filters.difficulty === level ? "default" : "outline",
										className: "cursor-pointer px-3 py-1 text-sm",
										onClick: () => setFilters((prev) => ({
											...prev,
											difficulty: prev.difficulty === level ? null : level
										})),
										children: ["Nível ", level]
									}, level))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								"data-uid": "src/components/FilterBar.tsx:113:15",
								"data-prohibitions": "[]",
								variant: "outline",
								className: "w-full",
								onClick: () => setFilters((prev) => ({
									...prev,
									priceRange: [0, 200],
									difficulty: null
								})),
								children: "Limpar Filtros"
							})
						]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/components/FilterBar.tsx:126:9",
				"data-prohibitions": "[]",
				className: "flex items-center gap-2 shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, {
					"data-uid": "src/components/FilterBar.tsx:127:11",
					"data-prohibitions": "[editContent]",
					className: "w-4 h-4 text-muted-foreground hidden lg:block shrink-0"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					"data-uid": "src/components/FilterBar.tsx:128:11",
					"data-prohibitions": "[]",
					value: filters.sort,
					onValueChange: (val) => setFilters((prev) => ({
						...prev,
						sort: val
					})),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						"data-uid": "src/components/FilterBar.tsx:132:13",
						"data-prohibitions": "[]",
						className: "w-[180px] md:w-[200px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
							"data-uid": "src/components/FilterBar.tsx:133:15",
							"data-prohibitions": "[editContent]",
							placeholder: "Ordenar por"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
						"data-uid": "src/components/FilterBar.tsx:135:13",
						"data-prohibitions": "[]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								"data-uid": "src/components/FilterBar.tsx:136:15",
								"data-prohibitions": "[]",
								value: "relevantes",
								children: "Mais relevantes"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								"data-uid": "src/components/FilterBar.tsx:137:15",
								"data-prohibitions": "[]",
								value: "mais-vendidos",
								children: "Mais Vendidos"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								"data-uid": "src/components/FilterBar.tsx:138:15",
								"data-prohibitions": "[]",
								value: "menor-preco",
								children: "Menor Preço"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								"data-uid": "src/components/FilterBar.tsx:139:15",
								"data-prohibitions": "[]",
								value: "maior-preco",
								children: "Maior Preço"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								"data-uid": "src/components/FilterBar.tsx:140:15",
								"data-prohibitions": "[]",
								value: "recentes",
								children: "Mais Recentes"
							})
						]
					})]
				})]
			})]
		})]
	});
}
//#endregion
//#region src/components/Newsletter.tsx
function Newsletter() {
	const { toast } = useToast();
	const { coupons } = useCouponStore();
	const { addSubscriber } = useSubscriberStore();
	const [email, setEmail] = (0, import_react.useState)("");
	const handleSubscribe = (e) => {
		e.preventDefault();
		if (email) {
			addSubscriber(email);
			const welcomeCoupon = coupons.find((c) => c.isWelcomeCoupon && c.isActive);
			if (welcomeCoupon) {
				const discountValue = welcomeCoupon.type === "percentage" ? `${welcomeCoupon.value}%` : `R$ ${welcomeCoupon.value.toFixed(2).replace(".", ",")}`;
				sendWelcomeEmail(email, "Assinante", welcomeCoupon.code, discountValue);
			}
			toast({
				title: "Inscrição confirmada!",
				description: "Você receberá nossas novidades em breve."
			});
			setEmail("");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"data-uid": "src/components/Newsletter.tsx:41:5",
		"data-prohibitions": "[]",
		className: "mt-20 bg-slate-100 dark:bg-slate-900 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto mb-10 border border-slate-300 dark:border-slate-800 shadow-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
				"data-uid": "src/components/Newsletter.tsx:42:7",
				"data-prohibitions": "[editContent]",
				className: "w-10 h-10 text-primary mx-auto mb-4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				"data-uid": "src/components/Newsletter.tsx:43:7",
				"data-prohibitions": "[]",
				className: "text-2xl md:text-3xl font-heading font-bold mb-4 text-slate-900 dark:text-slate-50",
				children: "Assine nossa Newsletter"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				"data-uid": "src/components/Newsletter.tsx:46:7",
				"data-prohibitions": "[]",
				className: "text-slate-600 dark:text-slate-400 mb-6 font-medium",
				children: "Receba atualizações sobre novos lançamentos, dicas de montagem e ofertas exclusivas."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				"data-uid": "src/components/Newsletter.tsx:49:7",
				"data-prohibitions": "[]",
				className: "flex flex-col sm:flex-row gap-3 max-w-md mx-auto",
				onSubmit: handleSubscribe,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					"data-uid": "src/components/Newsletter.tsx:50:9",
					"data-prohibitions": "[editContent]",
					placeholder: "Seu melhor e-mail",
					type: "email",
					required: true,
					value: email,
					onChange: (e) => setEmail(e.target.value),
					className: "bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder:text-slate-500 shadow-sm focus-visible:ring-primary h-12 font-medium"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					"data-uid": "src/components/Newsletter.tsx:58:9",
					"data-prohibitions": "[]",
					type: "submit",
					size: "lg",
					className: "h-12 px-8 font-bold shadow-sm transition-transform hover:scale-[1.02]",
					children: "Cadastrar"
				})]
			})
		]
	});
}
//#endregion
//#region ../../cache/modules/catalogo-papercraft-3d-b9437/node_modules/.pnpm/embla-carousel-reactive-utils@8.6.0_embla-carousel@8.6.0/node_modules/embla-carousel-reactive-utils/esm/embla-carousel-reactive-utils.esm.js
function isObject$1(subject) {
	return Object.prototype.toString.call(subject) === "[object Object]";
}
function isRecord(subject) {
	return isObject$1(subject) || Array.isArray(subject);
}
function canUseDOM() {
	return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
function areOptionsEqual(optionsA, optionsB) {
	const optionsAKeys = Object.keys(optionsA);
	const optionsBKeys = Object.keys(optionsB);
	if (optionsAKeys.length !== optionsBKeys.length) return false;
	if (JSON.stringify(Object.keys(optionsA.breakpoints || {})) !== JSON.stringify(Object.keys(optionsB.breakpoints || {}))) return false;
	return optionsAKeys.every((key) => {
		const valueA = optionsA[key];
		const valueB = optionsB[key];
		if (typeof valueA === "function") return `${valueA}` === `${valueB}`;
		if (!isRecord(valueA) || !isRecord(valueB)) return valueA === valueB;
		return areOptionsEqual(valueA, valueB);
	});
}
function sortAndMapPluginToOptions(plugins) {
	return plugins.concat().sort((a, b) => a.name > b.name ? 1 : -1).map((plugin) => plugin.options);
}
function arePluginsEqual(pluginsA, pluginsB) {
	if (pluginsA.length !== pluginsB.length) return false;
	const optionsA = sortAndMapPluginToOptions(pluginsA);
	const optionsB = sortAndMapPluginToOptions(pluginsB);
	return optionsA.every((optionA, index) => {
		const optionB = optionsB[index];
		return areOptionsEqual(optionA, optionB);
	});
}
//#endregion
//#region ../../cache/modules/catalogo-papercraft-3d-b9437/node_modules/.pnpm/embla-carousel@8.6.0/node_modules/embla-carousel/esm/embla-carousel.esm.js
function isNumber(subject) {
	return typeof subject === "number";
}
function isString(subject) {
	return typeof subject === "string";
}
function isBoolean(subject) {
	return typeof subject === "boolean";
}
function isObject(subject) {
	return Object.prototype.toString.call(subject) === "[object Object]";
}
function mathAbs(n) {
	return Math.abs(n);
}
function mathSign(n) {
	return Math.sign(n);
}
function deltaAbs(valueB, valueA) {
	return mathAbs(valueB - valueA);
}
function factorAbs(valueB, valueA) {
	if (valueB === 0 || valueA === 0) return 0;
	if (mathAbs(valueB) <= mathAbs(valueA)) return 0;
	return mathAbs(deltaAbs(mathAbs(valueB), mathAbs(valueA)) / valueB);
}
function roundToTwoDecimals(num) {
	return Math.round(num * 100) / 100;
}
function arrayKeys(array) {
	return objectKeys(array).map(Number);
}
function arrayLast(array) {
	return array[arrayLastIndex(array)];
}
function arrayLastIndex(array) {
	return Math.max(0, array.length - 1);
}
function arrayIsLastIndex(array, index) {
	return index === arrayLastIndex(array);
}
function arrayFromNumber(n, startAt = 0) {
	return Array.from(Array(n), (_, i) => startAt + i);
}
function objectKeys(object) {
	return Object.keys(object);
}
function objectsMergeDeep(objectA, objectB) {
	return [objectA, objectB].reduce((mergedObjects, currentObject) => {
		objectKeys(currentObject).forEach((key) => {
			const valueA = mergedObjects[key];
			const valueB = currentObject[key];
			mergedObjects[key] = isObject(valueA) && isObject(valueB) ? objectsMergeDeep(valueA, valueB) : valueB;
		});
		return mergedObjects;
	}, {});
}
function isMouseEvent(evt, ownerWindow) {
	return typeof ownerWindow.MouseEvent !== "undefined" && evt instanceof ownerWindow.MouseEvent;
}
function Alignment(align, viewSize) {
	const predefined = {
		start,
		center,
		end
	};
	function start() {
		return 0;
	}
	function center(n) {
		return end(n) / 2;
	}
	function end(n) {
		return viewSize - n;
	}
	function measure(n, index) {
		if (isString(align)) return predefined[align](n);
		return align(viewSize, n, index);
	}
	return { measure };
}
function EventStore() {
	let listeners = [];
	function add(node, type, handler, options = { passive: true }) {
		let removeListener;
		if ("addEventListener" in node) {
			node.addEventListener(type, handler, options);
			removeListener = () => node.removeEventListener(type, handler, options);
		} else {
			const legacyMediaQueryList = node;
			legacyMediaQueryList.addListener(handler);
			removeListener = () => legacyMediaQueryList.removeListener(handler);
		}
		listeners.push(removeListener);
		return self;
	}
	function clear() {
		listeners = listeners.filter((remove) => remove());
	}
	const self = {
		add,
		clear
	};
	return self;
}
function Animations(ownerDocument, ownerWindow, update, render) {
	const documentVisibleHandler = EventStore();
	const fixedTimeStep = 1e3 / 60;
	let lastTimeStamp = null;
	let accumulatedTime = 0;
	let animationId = 0;
	function init() {
		documentVisibleHandler.add(ownerDocument, "visibilitychange", () => {
			if (ownerDocument.hidden) reset();
		});
	}
	function destroy() {
		stop();
		documentVisibleHandler.clear();
	}
	function animate(timeStamp) {
		if (!animationId) return;
		if (!lastTimeStamp) {
			lastTimeStamp = timeStamp;
			update();
			update();
		}
		const timeElapsed = timeStamp - lastTimeStamp;
		lastTimeStamp = timeStamp;
		accumulatedTime += timeElapsed;
		while (accumulatedTime >= fixedTimeStep) {
			update();
			accumulatedTime -= fixedTimeStep;
		}
		render(accumulatedTime / fixedTimeStep);
		if (animationId) animationId = ownerWindow.requestAnimationFrame(animate);
	}
	function start() {
		if (animationId) return;
		animationId = ownerWindow.requestAnimationFrame(animate);
	}
	function stop() {
		ownerWindow.cancelAnimationFrame(animationId);
		lastTimeStamp = null;
		accumulatedTime = 0;
		animationId = 0;
	}
	function reset() {
		lastTimeStamp = null;
		accumulatedTime = 0;
	}
	return {
		init,
		destroy,
		start,
		stop,
		update,
		render
	};
}
function Axis(axis, contentDirection) {
	const isRightToLeft = contentDirection === "rtl";
	const isVertical = axis === "y";
	const scroll = isVertical ? "y" : "x";
	const cross = isVertical ? "x" : "y";
	const sign = !isVertical && isRightToLeft ? -1 : 1;
	const startEdge = getStartEdge();
	const endEdge = getEndEdge();
	function measureSize(nodeRect) {
		const { height, width } = nodeRect;
		return isVertical ? height : width;
	}
	function getStartEdge() {
		if (isVertical) return "top";
		return isRightToLeft ? "right" : "left";
	}
	function getEndEdge() {
		if (isVertical) return "bottom";
		return isRightToLeft ? "left" : "right";
	}
	function direction(n) {
		return n * sign;
	}
	return {
		scroll,
		cross,
		startEdge,
		endEdge,
		measureSize,
		direction
	};
}
function Limit(min = 0, max = 0) {
	const length = mathAbs(min - max);
	function reachedMin(n) {
		return n < min;
	}
	function reachedMax(n) {
		return n > max;
	}
	function reachedAny(n) {
		return reachedMin(n) || reachedMax(n);
	}
	function constrain(n) {
		if (!reachedAny(n)) return n;
		return reachedMin(n) ? min : max;
	}
	function removeOffset(n) {
		if (!length) return n;
		return n - length * Math.ceil((n - max) / length);
	}
	return {
		length,
		max,
		min,
		constrain,
		reachedAny,
		reachedMax,
		reachedMin,
		removeOffset
	};
}
function Counter(max, start, loop) {
	const { constrain } = Limit(0, max);
	const loopEnd = max + 1;
	let counter = withinLimit(start);
	function withinLimit(n) {
		return !loop ? constrain(n) : mathAbs((loopEnd + n) % loopEnd);
	}
	function get() {
		return counter;
	}
	function set(n) {
		counter = withinLimit(n);
		return self;
	}
	function add(n) {
		return clone().set(get() + n);
	}
	function clone() {
		return Counter(max, get(), loop);
	}
	const self = {
		get,
		set,
		add,
		clone
	};
	return self;
}
function DragHandler(axis, rootNode, ownerDocument, ownerWindow, target, dragTracker, location, animation, scrollTo, scrollBody, scrollTarget, index, eventHandler, percentOfView, dragFree, dragThreshold, skipSnaps, baseFriction, watchDrag) {
	const { cross: crossAxis, direction } = axis;
	const focusNodes = [
		"INPUT",
		"SELECT",
		"TEXTAREA"
	];
	const nonPassiveEvent = { passive: false };
	const initEvents = EventStore();
	const dragEvents = EventStore();
	const goToNextThreshold = Limit(50, 225).constrain(percentOfView.measure(20));
	const snapForceBoost = {
		mouse: 300,
		touch: 400
	};
	const freeForceBoost = {
		mouse: 500,
		touch: 600
	};
	const baseSpeed = dragFree ? 43 : 25;
	let isMoving = false;
	let startScroll = 0;
	let startCross = 0;
	let pointerIsDown = false;
	let preventScroll = false;
	let preventClick = false;
	let isMouse = false;
	function init(emblaApi) {
		if (!watchDrag) return;
		function downIfAllowed(evt) {
			if (isBoolean(watchDrag) || watchDrag(emblaApi, evt)) down(evt);
		}
		const node = rootNode;
		initEvents.add(node, "dragstart", (evt) => evt.preventDefault(), nonPassiveEvent).add(node, "touchmove", () => void 0, nonPassiveEvent).add(node, "touchend", () => void 0).add(node, "touchstart", downIfAllowed).add(node, "mousedown", downIfAllowed).add(node, "touchcancel", up).add(node, "contextmenu", up).add(node, "click", click, true);
	}
	function destroy() {
		initEvents.clear();
		dragEvents.clear();
	}
	function addDragEvents() {
		const node = isMouse ? ownerDocument : rootNode;
		dragEvents.add(node, "touchmove", move, nonPassiveEvent).add(node, "touchend", up).add(node, "mousemove", move, nonPassiveEvent).add(node, "mouseup", up);
	}
	function isFocusNode(node) {
		const nodeName = node.nodeName || "";
		return focusNodes.includes(nodeName);
	}
	function forceBoost() {
		return (dragFree ? freeForceBoost : snapForceBoost)[isMouse ? "mouse" : "touch"];
	}
	function allowedForce(force, targetChanged) {
		const next = index.add(mathSign(force) * -1);
		const baseForce = scrollTarget.byDistance(force, !dragFree).distance;
		if (dragFree || mathAbs(force) < goToNextThreshold) return baseForce;
		if (skipSnaps && targetChanged) return baseForce * .5;
		return scrollTarget.byIndex(next.get(), 0).distance;
	}
	function down(evt) {
		const isMouseEvt = isMouseEvent(evt, ownerWindow);
		isMouse = isMouseEvt;
		preventClick = dragFree && isMouseEvt && !evt.buttons && isMoving;
		isMoving = deltaAbs(target.get(), location.get()) >= 2;
		if (isMouseEvt && evt.button !== 0) return;
		if (isFocusNode(evt.target)) return;
		pointerIsDown = true;
		dragTracker.pointerDown(evt);
		scrollBody.useFriction(0).useDuration(0);
		target.set(location);
		addDragEvents();
		startScroll = dragTracker.readPoint(evt);
		startCross = dragTracker.readPoint(evt, crossAxis);
		eventHandler.emit("pointerDown");
	}
	function move(evt) {
		if (!isMouseEvent(evt, ownerWindow) && evt.touches.length >= 2) return up(evt);
		const lastScroll = dragTracker.readPoint(evt);
		const lastCross = dragTracker.readPoint(evt, crossAxis);
		const diffScroll = deltaAbs(lastScroll, startScroll);
		const diffCross = deltaAbs(lastCross, startCross);
		if (!preventScroll && !isMouse) {
			if (!evt.cancelable) return up(evt);
			preventScroll = diffScroll > diffCross;
			if (!preventScroll) return up(evt);
		}
		const diff = dragTracker.pointerMove(evt);
		if (diffScroll > dragThreshold) preventClick = true;
		scrollBody.useFriction(.3).useDuration(.75);
		animation.start();
		target.add(direction(diff));
		evt.preventDefault();
	}
	function up(evt) {
		const targetChanged = scrollTarget.byDistance(0, false).index !== index.get();
		const rawForce = dragTracker.pointerUp(evt) * forceBoost();
		const force = allowedForce(direction(rawForce), targetChanged);
		const forceFactor = factorAbs(rawForce, force);
		const speed = baseSpeed - 10 * forceFactor;
		const friction = baseFriction + forceFactor / 50;
		preventScroll = false;
		pointerIsDown = false;
		dragEvents.clear();
		scrollBody.useDuration(speed).useFriction(friction);
		scrollTo.distance(force, !dragFree);
		isMouse = false;
		eventHandler.emit("pointerUp");
	}
	function click(evt) {
		if (preventClick) {
			evt.stopPropagation();
			evt.preventDefault();
			preventClick = false;
		}
	}
	function pointerDown() {
		return pointerIsDown;
	}
	return {
		init,
		destroy,
		pointerDown
	};
}
function DragTracker(axis, ownerWindow) {
	const logInterval = 170;
	let startEvent;
	let lastEvent;
	function readTime(evt) {
		return evt.timeStamp;
	}
	function readPoint(evt, evtAxis) {
		const coord = `client${(evtAxis || axis.scroll) === "x" ? "X" : "Y"}`;
		return (isMouseEvent(evt, ownerWindow) ? evt : evt.touches[0])[coord];
	}
	function pointerDown(evt) {
		startEvent = evt;
		lastEvent = evt;
		return readPoint(evt);
	}
	function pointerMove(evt) {
		const diff = readPoint(evt) - readPoint(lastEvent);
		const expired = readTime(evt) - readTime(startEvent) > logInterval;
		lastEvent = evt;
		if (expired) startEvent = evt;
		return diff;
	}
	function pointerUp(evt) {
		if (!startEvent || !lastEvent) return 0;
		const diffDrag = readPoint(lastEvent) - readPoint(startEvent);
		const diffTime = readTime(evt) - readTime(startEvent);
		const expired = readTime(evt) - readTime(lastEvent) > logInterval;
		const force = diffDrag / diffTime;
		return diffTime && !expired && mathAbs(force) > .1 ? force : 0;
	}
	return {
		pointerDown,
		pointerMove,
		pointerUp,
		readPoint
	};
}
function NodeRects() {
	function measure(node) {
		const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = node;
		return {
			top: offsetTop,
			right: offsetLeft + offsetWidth,
			bottom: offsetTop + offsetHeight,
			left: offsetLeft,
			width: offsetWidth,
			height: offsetHeight
		};
	}
	return { measure };
}
function PercentOfView(viewSize) {
	function measure(n) {
		return viewSize * (n / 100);
	}
	return { measure };
}
function ResizeHandler(container, eventHandler, ownerWindow, slides, axis, watchResize, nodeRects) {
	const observeNodes = [container].concat(slides);
	let resizeObserver;
	let containerSize;
	let slideSizes = [];
	let destroyed = false;
	function readSize(node) {
		return axis.measureSize(nodeRects.measure(node));
	}
	function init(emblaApi) {
		if (!watchResize) return;
		containerSize = readSize(container);
		slideSizes = slides.map(readSize);
		function defaultCallback(entries) {
			for (const entry of entries) {
				if (destroyed) return;
				const isContainer = entry.target === container;
				const slideIndex = slides.indexOf(entry.target);
				const lastSize = isContainer ? containerSize : slideSizes[slideIndex];
				if (mathAbs(readSize(isContainer ? container : slides[slideIndex]) - lastSize) >= .5) {
					emblaApi.reInit();
					eventHandler.emit("resize");
					break;
				}
			}
		}
		resizeObserver = new ResizeObserver((entries) => {
			if (isBoolean(watchResize) || watchResize(emblaApi, entries)) defaultCallback(entries);
		});
		ownerWindow.requestAnimationFrame(() => {
			observeNodes.forEach((node) => resizeObserver.observe(node));
		});
	}
	function destroy() {
		destroyed = true;
		if (resizeObserver) resizeObserver.disconnect();
	}
	return {
		init,
		destroy
	};
}
function ScrollBody(location, offsetLocation, previousLocation, target, baseDuration, baseFriction) {
	let scrollVelocity = 0;
	let scrollDirection = 0;
	let scrollDuration = baseDuration;
	let scrollFriction = baseFriction;
	let rawLocation = location.get();
	let rawLocationPrevious = 0;
	function seek() {
		const displacement = target.get() - location.get();
		const isInstant = !scrollDuration;
		let scrollDistance = 0;
		if (isInstant) {
			scrollVelocity = 0;
			previousLocation.set(target);
			location.set(target);
			scrollDistance = displacement;
		} else {
			previousLocation.set(location);
			scrollVelocity += displacement / scrollDuration;
			scrollVelocity *= scrollFriction;
			rawLocation += scrollVelocity;
			location.add(scrollVelocity);
			scrollDistance = rawLocation - rawLocationPrevious;
		}
		scrollDirection = mathSign(scrollDistance);
		rawLocationPrevious = rawLocation;
		return self;
	}
	function settled() {
		return mathAbs(target.get() - offsetLocation.get()) < .001;
	}
	function duration() {
		return scrollDuration;
	}
	function direction() {
		return scrollDirection;
	}
	function velocity() {
		return scrollVelocity;
	}
	function useBaseDuration() {
		return useDuration(baseDuration);
	}
	function useBaseFriction() {
		return useFriction(baseFriction);
	}
	function useDuration(n) {
		scrollDuration = n;
		return self;
	}
	function useFriction(n) {
		scrollFriction = n;
		return self;
	}
	const self = {
		direction,
		duration,
		velocity,
		seek,
		settled,
		useBaseFriction,
		useBaseDuration,
		useFriction,
		useDuration
	};
	return self;
}
function ScrollBounds(limit, location, target, scrollBody, percentOfView) {
	const pullBackThreshold = percentOfView.measure(10);
	const edgeOffsetTolerance = percentOfView.measure(50);
	const frictionLimit = Limit(.1, .99);
	let disabled = false;
	function shouldConstrain() {
		if (disabled) return false;
		if (!limit.reachedAny(target.get())) return false;
		if (!limit.reachedAny(location.get())) return false;
		return true;
	}
	function constrain(pointerDown) {
		if (!shouldConstrain()) return;
		const diffToEdge = mathAbs(limit[limit.reachedMin(location.get()) ? "min" : "max"] - location.get());
		const diffToTarget = target.get() - location.get();
		const friction = frictionLimit.constrain(diffToEdge / edgeOffsetTolerance);
		target.subtract(diffToTarget * friction);
		if (!pointerDown && mathAbs(diffToTarget) < pullBackThreshold) {
			target.set(limit.constrain(target.get()));
			scrollBody.useDuration(25).useBaseFriction();
		}
	}
	function toggleActive(active) {
		disabled = !active;
	}
	return {
		shouldConstrain,
		constrain,
		toggleActive
	};
}
function ScrollContain(viewSize, contentSize, snapsAligned, containScroll, pixelTolerance) {
	const scrollBounds = Limit(-contentSize + viewSize, 0);
	const snapsBounded = measureBounded();
	const scrollContainLimit = findScrollContainLimit();
	const snapsContained = measureContained();
	function usePixelTolerance(bound, snap) {
		return deltaAbs(bound, snap) <= 1;
	}
	function findScrollContainLimit() {
		const startSnap = snapsBounded[0];
		const endSnap = arrayLast(snapsBounded);
		return Limit(snapsBounded.lastIndexOf(startSnap), snapsBounded.indexOf(endSnap) + 1);
	}
	function measureBounded() {
		return snapsAligned.map((snapAligned, index) => {
			const { min, max } = scrollBounds;
			const snap = scrollBounds.constrain(snapAligned);
			const isFirst = !index;
			const isLast = arrayIsLastIndex(snapsAligned, index);
			if (isFirst) return max;
			if (isLast) return min;
			if (usePixelTolerance(min, snap)) return min;
			if (usePixelTolerance(max, snap)) return max;
			return snap;
		}).map((scrollBound) => parseFloat(scrollBound.toFixed(3)));
	}
	function measureContained() {
		if (contentSize <= viewSize + pixelTolerance) return [scrollBounds.max];
		if (containScroll === "keepSnaps") return snapsBounded;
		const { min, max } = scrollContainLimit;
		return snapsBounded.slice(min, max);
	}
	return {
		snapsContained,
		scrollContainLimit
	};
}
function ScrollLimit(contentSize, scrollSnaps, loop) {
	const max = scrollSnaps[0];
	return { limit: Limit(loop ? max - contentSize : arrayLast(scrollSnaps), max) };
}
function ScrollLooper(contentSize, limit, location, vectors) {
	const jointSafety = .1;
	const { reachedMin, reachedMax } = Limit(limit.min + jointSafety, limit.max + jointSafety);
	function shouldLoop(direction) {
		if (direction === 1) return reachedMax(location.get());
		if (direction === -1) return reachedMin(location.get());
		return false;
	}
	function loop(direction) {
		if (!shouldLoop(direction)) return;
		const loopDistance = contentSize * (direction * -1);
		vectors.forEach((v) => v.add(loopDistance));
	}
	return { loop };
}
function ScrollProgress(limit) {
	const { max, length } = limit;
	function get(n) {
		const currentLocation = n - max;
		return length ? currentLocation / -length : 0;
	}
	return { get };
}
function ScrollSnaps(axis, alignment, containerRect, slideRects, slidesToScroll) {
	const { startEdge, endEdge } = axis;
	const { groupSlides } = slidesToScroll;
	const alignments = measureSizes().map(alignment.measure);
	const snaps = measureUnaligned();
	const snapsAligned = measureAligned();
	function measureSizes() {
		return groupSlides(slideRects).map((rects) => arrayLast(rects)[endEdge] - rects[0][startEdge]).map(mathAbs);
	}
	function measureUnaligned() {
		return slideRects.map((rect) => containerRect[startEdge] - rect[startEdge]).map((snap) => -mathAbs(snap));
	}
	function measureAligned() {
		return groupSlides(snaps).map((g) => g[0]).map((snap, index) => snap + alignments[index]);
	}
	return {
		snaps,
		snapsAligned
	};
}
function SlideRegistry(containSnaps, containScroll, scrollSnaps, scrollContainLimit, slidesToScroll, slideIndexes) {
	const { groupSlides } = slidesToScroll;
	const { min, max } = scrollContainLimit;
	const slideRegistry = createSlideRegistry();
	function createSlideRegistry() {
		const groupedSlideIndexes = groupSlides(slideIndexes);
		const doNotContain = !containSnaps || containScroll === "keepSnaps";
		if (scrollSnaps.length === 1) return [slideIndexes];
		if (doNotContain) return groupedSlideIndexes;
		return groupedSlideIndexes.slice(min, max).map((group, index, groups) => {
			const isFirst = !index;
			const isLast = arrayIsLastIndex(groups, index);
			if (isFirst) return arrayFromNumber(arrayLast(groups[0]) + 1);
			if (isLast) return arrayFromNumber(arrayLastIndex(slideIndexes) - arrayLast(groups)[0] + 1, arrayLast(groups)[0]);
			return group;
		});
	}
	return { slideRegistry };
}
function ScrollTarget(loop, scrollSnaps, contentSize, limit, targetVector) {
	const { reachedAny, removeOffset, constrain } = limit;
	function minDistance(distances) {
		return distances.concat().sort((a, b) => mathAbs(a) - mathAbs(b))[0];
	}
	function findTargetSnap(target) {
		const distance = loop ? removeOffset(target) : constrain(target);
		const { index } = scrollSnaps.map((snap, index) => ({
			diff: shortcut(snap - distance, 0),
			index
		})).sort((d1, d2) => mathAbs(d1.diff) - mathAbs(d2.diff))[0];
		return {
			index,
			distance
		};
	}
	function shortcut(target, direction) {
		const targets = [
			target,
			target + contentSize,
			target - contentSize
		];
		if (!loop) return target;
		if (!direction) return minDistance(targets);
		const matchingTargets = targets.filter((t) => mathSign(t) === direction);
		if (matchingTargets.length) return minDistance(matchingTargets);
		return arrayLast(targets) - contentSize;
	}
	function byIndex(index, direction) {
		return {
			index,
			distance: shortcut(scrollSnaps[index] - targetVector.get(), direction)
		};
	}
	function byDistance(distance, snap) {
		const target = targetVector.get() + distance;
		const { index, distance: targetSnapDistance } = findTargetSnap(target);
		const reachedBound = !loop && reachedAny(target);
		if (!snap || reachedBound) return {
			index,
			distance
		};
		return {
			index,
			distance: distance + shortcut(scrollSnaps[index] - targetSnapDistance, 0)
		};
	}
	return {
		byDistance,
		byIndex,
		shortcut
	};
}
function ScrollTo(animation, indexCurrent, indexPrevious, scrollBody, scrollTarget, targetVector, eventHandler) {
	function scrollTo(target) {
		const distanceDiff = target.distance;
		const indexDiff = target.index !== indexCurrent.get();
		targetVector.add(distanceDiff);
		if (distanceDiff) if (scrollBody.duration()) animation.start();
		else {
			animation.update();
			animation.render(1);
			animation.update();
		}
		if (indexDiff) {
			indexPrevious.set(indexCurrent.get());
			indexCurrent.set(target.index);
			eventHandler.emit("select");
		}
	}
	function distance(n, snap) {
		scrollTo(scrollTarget.byDistance(n, snap));
	}
	function index(n, direction) {
		const targetIndex = indexCurrent.clone().set(n);
		scrollTo(scrollTarget.byIndex(targetIndex.get(), direction));
	}
	return {
		distance,
		index
	};
}
function SlideFocus(root, slides, slideRegistry, scrollTo, scrollBody, eventStore, eventHandler, watchFocus) {
	const focusListenerOptions = {
		passive: true,
		capture: true
	};
	let lastTabPressTime = 0;
	function init(emblaApi) {
		if (!watchFocus) return;
		function defaultCallback(index) {
			if ((/* @__PURE__ */ new Date()).getTime() - lastTabPressTime > 10) return;
			eventHandler.emit("slideFocusStart");
			root.scrollLeft = 0;
			const group = slideRegistry.findIndex((group) => group.includes(index));
			if (!isNumber(group)) return;
			scrollBody.useDuration(0);
			scrollTo.index(group, 0);
			eventHandler.emit("slideFocus");
		}
		eventStore.add(document, "keydown", registerTabPress, false);
		slides.forEach((slide, slideIndex) => {
			eventStore.add(slide, "focus", (evt) => {
				if (isBoolean(watchFocus) || watchFocus(emblaApi, evt)) defaultCallback(slideIndex);
			}, focusListenerOptions);
		});
	}
	function registerTabPress(event) {
		if (event.code === "Tab") lastTabPressTime = (/* @__PURE__ */ new Date()).getTime();
	}
	return { init };
}
function Vector1D(initialValue) {
	let value = initialValue;
	function get() {
		return value;
	}
	function set(n) {
		value = normalizeInput(n);
	}
	function add(n) {
		value += normalizeInput(n);
	}
	function subtract(n) {
		value -= normalizeInput(n);
	}
	function normalizeInput(n) {
		return isNumber(n) ? n : n.get();
	}
	return {
		get,
		set,
		add,
		subtract
	};
}
function Translate(axis, container) {
	const translate = axis.scroll === "x" ? x : y;
	const containerStyle = container.style;
	let previousTarget = null;
	let disabled = false;
	function x(n) {
		return `translate3d(${n}px,0px,0px)`;
	}
	function y(n) {
		return `translate3d(0px,${n}px,0px)`;
	}
	function to(target) {
		if (disabled) return;
		const newTarget = roundToTwoDecimals(axis.direction(target));
		if (newTarget === previousTarget) return;
		containerStyle.transform = translate(newTarget);
		previousTarget = newTarget;
	}
	function toggleActive(active) {
		disabled = !active;
	}
	function clear() {
		if (disabled) return;
		containerStyle.transform = "";
		if (!container.getAttribute("style")) container.removeAttribute("style");
	}
	return {
		clear,
		to,
		toggleActive
	};
}
function SlideLooper(axis, viewSize, contentSize, slideSizes, slideSizesWithGaps, snaps, scrollSnaps, location, slides) {
	const roundingSafety = .5;
	const ascItems = arrayKeys(slideSizesWithGaps);
	const descItems = arrayKeys(slideSizesWithGaps).reverse();
	const loopPoints = startPoints().concat(endPoints());
	function removeSlideSizes(indexes, from) {
		return indexes.reduce((a, i) => {
			return a - slideSizesWithGaps[i];
		}, from);
	}
	function slidesInGap(indexes, gap) {
		return indexes.reduce((a, i) => {
			return removeSlideSizes(a, gap) > 0 ? a.concat([i]) : a;
		}, []);
	}
	function findSlideBounds(offset) {
		return snaps.map((snap, index) => ({
			start: snap - slideSizes[index] + roundingSafety + offset,
			end: snap + viewSize - roundingSafety + offset
		}));
	}
	function findLoopPoints(indexes, offset, isEndEdge) {
		const slideBounds = findSlideBounds(offset);
		return indexes.map((index) => {
			const initial = isEndEdge ? 0 : -contentSize;
			const altered = isEndEdge ? contentSize : 0;
			const boundEdge = isEndEdge ? "end" : "start";
			const loopPoint = slideBounds[index][boundEdge];
			return {
				index,
				loopPoint,
				slideLocation: Vector1D(-1),
				translate: Translate(axis, slides[index]),
				target: () => location.get() > loopPoint ? initial : altered
			};
		});
	}
	function startPoints() {
		const gap = scrollSnaps[0];
		return findLoopPoints(slidesInGap(descItems, gap), contentSize, false);
	}
	function endPoints() {
		return findLoopPoints(slidesInGap(ascItems, viewSize - scrollSnaps[0] - 1), -contentSize, true);
	}
	function canLoop() {
		return loopPoints.every(({ index }) => {
			return removeSlideSizes(ascItems.filter((i) => i !== index), viewSize) <= .1;
		});
	}
	function loop() {
		loopPoints.forEach((loopPoint) => {
			const { target, translate, slideLocation } = loopPoint;
			const shiftLocation = target();
			if (shiftLocation === slideLocation.get()) return;
			translate.to(shiftLocation);
			slideLocation.set(shiftLocation);
		});
	}
	function clear() {
		loopPoints.forEach((loopPoint) => loopPoint.translate.clear());
	}
	return {
		canLoop,
		clear,
		loop,
		loopPoints
	};
}
function SlidesHandler(container, eventHandler, watchSlides) {
	let mutationObserver;
	let destroyed = false;
	function init(emblaApi) {
		if (!watchSlides) return;
		function defaultCallback(mutations) {
			for (const mutation of mutations) if (mutation.type === "childList") {
				emblaApi.reInit();
				eventHandler.emit("slidesChanged");
				break;
			}
		}
		mutationObserver = new MutationObserver((mutations) => {
			if (destroyed) return;
			if (isBoolean(watchSlides) || watchSlides(emblaApi, mutations)) defaultCallback(mutations);
		});
		mutationObserver.observe(container, { childList: true });
	}
	function destroy() {
		if (mutationObserver) mutationObserver.disconnect();
		destroyed = true;
	}
	return {
		init,
		destroy
	};
}
function SlidesInView(container, slides, eventHandler, threshold) {
	const intersectionEntryMap = {};
	let inViewCache = null;
	let notInViewCache = null;
	let intersectionObserver;
	let destroyed = false;
	function init() {
		intersectionObserver = new IntersectionObserver((entries) => {
			if (destroyed) return;
			entries.forEach((entry) => {
				const index = slides.indexOf(entry.target);
				intersectionEntryMap[index] = entry;
			});
			inViewCache = null;
			notInViewCache = null;
			eventHandler.emit("slidesInView");
		}, {
			root: container.parentElement,
			threshold
		});
		slides.forEach((slide) => intersectionObserver.observe(slide));
	}
	function destroy() {
		if (intersectionObserver) intersectionObserver.disconnect();
		destroyed = true;
	}
	function createInViewList(inView) {
		return objectKeys(intersectionEntryMap).reduce((list, slideIndex) => {
			const index = parseInt(slideIndex);
			const { isIntersecting } = intersectionEntryMap[index];
			if (inView && isIntersecting || !inView && !isIntersecting) list.push(index);
			return list;
		}, []);
	}
	function get(inView = true) {
		if (inView && inViewCache) return inViewCache;
		if (!inView && notInViewCache) return notInViewCache;
		const slideIndexes = createInViewList(inView);
		if (inView) inViewCache = slideIndexes;
		if (!inView) notInViewCache = slideIndexes;
		return slideIndexes;
	}
	return {
		init,
		destroy,
		get
	};
}
function SlideSizes(axis, containerRect, slideRects, slides, readEdgeGap, ownerWindow) {
	const { measureSize, startEdge, endEdge } = axis;
	const withEdgeGap = slideRects[0] && readEdgeGap;
	const startGap = measureStartGap();
	const endGap = measureEndGap();
	const slideSizes = slideRects.map(measureSize);
	const slideSizesWithGaps = measureWithGaps();
	function measureStartGap() {
		if (!withEdgeGap) return 0;
		const slideRect = slideRects[0];
		return mathAbs(containerRect[startEdge] - slideRect[startEdge]);
	}
	function measureEndGap() {
		if (!withEdgeGap) return 0;
		const style = ownerWindow.getComputedStyle(arrayLast(slides));
		return parseFloat(style.getPropertyValue(`margin-${endEdge}`));
	}
	function measureWithGaps() {
		return slideRects.map((rect, index, rects) => {
			const isFirst = !index;
			const isLast = arrayIsLastIndex(rects, index);
			if (isFirst) return slideSizes[index] + startGap;
			if (isLast) return slideSizes[index] + endGap;
			return rects[index + 1][startEdge] - rect[startEdge];
		}).map(mathAbs);
	}
	return {
		slideSizes,
		slideSizesWithGaps,
		startGap,
		endGap
	};
}
function SlidesToScroll(axis, viewSize, slidesToScroll, loop, containerRect, slideRects, startGap, endGap, pixelTolerance) {
	const { startEdge, endEdge, direction } = axis;
	const groupByNumber = isNumber(slidesToScroll);
	function byNumber(array, groupSize) {
		return arrayKeys(array).filter((i) => i % groupSize === 0).map((i) => array.slice(i, i + groupSize));
	}
	function bySize(array) {
		if (!array.length) return [];
		return arrayKeys(array).reduce((groups, rectB, index) => {
			const rectA = arrayLast(groups) || 0;
			const isFirst = rectA === 0;
			const isLast = rectB === arrayLastIndex(array);
			const edgeA = containerRect[startEdge] - slideRects[rectA][startEdge];
			const edgeB = containerRect[startEdge] - slideRects[rectB][endEdge];
			const gapA = !loop && isFirst ? direction(startGap) : 0;
			const chunkSize = mathAbs(edgeB - (!loop && isLast ? direction(endGap) : 0) - (edgeA + gapA));
			if (index && chunkSize > viewSize + pixelTolerance) groups.push(rectB);
			if (isLast) groups.push(array.length);
			return groups;
		}, []).map((currentSize, index, groups) => {
			const previousSize = Math.max(groups[index - 1] || 0);
			return array.slice(previousSize, currentSize);
		});
	}
	function groupSlides(array) {
		return groupByNumber ? byNumber(array, slidesToScroll) : bySize(array);
	}
	return { groupSlides };
}
function Engine(root, container, slides, ownerDocument, ownerWindow, options, eventHandler) {
	const { align, axis: scrollAxis, direction, startIndex, loop, duration, dragFree, dragThreshold, inViewThreshold, slidesToScroll: groupSlides, skipSnaps, containScroll, watchResize, watchSlides, watchDrag, watchFocus } = options;
	const pixelTolerance = 2;
	const nodeRects = NodeRects();
	const containerRect = nodeRects.measure(container);
	const slideRects = slides.map(nodeRects.measure);
	const axis = Axis(scrollAxis, direction);
	const viewSize = axis.measureSize(containerRect);
	const percentOfView = PercentOfView(viewSize);
	const alignment = Alignment(align, viewSize);
	const containSnaps = !loop && !!containScroll;
	const { slideSizes, slideSizesWithGaps, startGap, endGap } = SlideSizes(axis, containerRect, slideRects, slides, loop || !!containScroll, ownerWindow);
	const slidesToScroll = SlidesToScroll(axis, viewSize, groupSlides, loop, containerRect, slideRects, startGap, endGap, pixelTolerance);
	const { snaps, snapsAligned } = ScrollSnaps(axis, alignment, containerRect, slideRects, slidesToScroll);
	const contentSize = -arrayLast(snaps) + arrayLast(slideSizesWithGaps);
	const { snapsContained, scrollContainLimit } = ScrollContain(viewSize, contentSize, snapsAligned, containScroll, pixelTolerance);
	const scrollSnaps = containSnaps ? snapsContained : snapsAligned;
	const { limit } = ScrollLimit(contentSize, scrollSnaps, loop);
	const index = Counter(arrayLastIndex(scrollSnaps), startIndex, loop);
	const indexPrevious = index.clone();
	const slideIndexes = arrayKeys(slides);
	const update = ({ dragHandler, scrollBody, scrollBounds, options: { loop } }) => {
		if (!loop) scrollBounds.constrain(dragHandler.pointerDown());
		scrollBody.seek();
	};
	const render = ({ scrollBody, translate, location, offsetLocation, previousLocation, scrollLooper, slideLooper, dragHandler, animation, eventHandler, scrollBounds, options: { loop } }, alpha) => {
		const shouldSettle = scrollBody.settled();
		const withinBounds = !scrollBounds.shouldConstrain();
		const hasSettled = loop ? shouldSettle : shouldSettle && withinBounds;
		const hasSettledAndIdle = hasSettled && !dragHandler.pointerDown();
		if (hasSettledAndIdle) animation.stop();
		const interpolatedLocation = location.get() * alpha + previousLocation.get() * (1 - alpha);
		offsetLocation.set(interpolatedLocation);
		if (loop) {
			scrollLooper.loop(scrollBody.direction());
			slideLooper.loop();
		}
		translate.to(offsetLocation.get());
		if (hasSettledAndIdle) eventHandler.emit("settle");
		if (!hasSettled) eventHandler.emit("scroll");
	};
	const animation = Animations(ownerDocument, ownerWindow, () => update(engine), (alpha) => render(engine, alpha));
	const friction = .68;
	const startLocation = scrollSnaps[index.get()];
	const location = Vector1D(startLocation);
	const previousLocation = Vector1D(startLocation);
	const offsetLocation = Vector1D(startLocation);
	const target = Vector1D(startLocation);
	const scrollBody = ScrollBody(location, offsetLocation, previousLocation, target, duration, friction);
	const scrollTarget = ScrollTarget(loop, scrollSnaps, contentSize, limit, target);
	const scrollTo = ScrollTo(animation, index, indexPrevious, scrollBody, scrollTarget, target, eventHandler);
	const scrollProgress = ScrollProgress(limit);
	const eventStore = EventStore();
	const slidesInView = SlidesInView(container, slides, eventHandler, inViewThreshold);
	const { slideRegistry } = SlideRegistry(containSnaps, containScroll, scrollSnaps, scrollContainLimit, slidesToScroll, slideIndexes);
	const slideFocus = SlideFocus(root, slides, slideRegistry, scrollTo, scrollBody, eventStore, eventHandler, watchFocus);
	const engine = {
		ownerDocument,
		ownerWindow,
		eventHandler,
		containerRect,
		slideRects,
		animation,
		axis,
		dragHandler: DragHandler(axis, root, ownerDocument, ownerWindow, target, DragTracker(axis, ownerWindow), location, animation, scrollTo, scrollBody, scrollTarget, index, eventHandler, percentOfView, dragFree, dragThreshold, skipSnaps, friction, watchDrag),
		eventStore,
		percentOfView,
		index,
		indexPrevious,
		limit,
		location,
		offsetLocation,
		previousLocation,
		options,
		resizeHandler: ResizeHandler(container, eventHandler, ownerWindow, slides, axis, watchResize, nodeRects),
		scrollBody,
		scrollBounds: ScrollBounds(limit, offsetLocation, target, scrollBody, percentOfView),
		scrollLooper: ScrollLooper(contentSize, limit, offsetLocation, [
			location,
			offsetLocation,
			previousLocation,
			target
		]),
		scrollProgress,
		scrollSnapList: scrollSnaps.map(scrollProgress.get),
		scrollSnaps,
		scrollTarget,
		scrollTo,
		slideLooper: SlideLooper(axis, viewSize, contentSize, slideSizes, slideSizesWithGaps, snaps, scrollSnaps, offsetLocation, slides),
		slideFocus,
		slidesHandler: SlidesHandler(container, eventHandler, watchSlides),
		slidesInView,
		slideIndexes,
		slideRegistry,
		slidesToScroll,
		target,
		translate: Translate(axis, container)
	};
	return engine;
}
function EventHandler() {
	let listeners = {};
	let api;
	function init(emblaApi) {
		api = emblaApi;
	}
	function getListeners(evt) {
		return listeners[evt] || [];
	}
	function emit(evt) {
		getListeners(evt).forEach((e) => e(api, evt));
		return self;
	}
	function on(evt, cb) {
		listeners[evt] = getListeners(evt).concat([cb]);
		return self;
	}
	function off(evt, cb) {
		listeners[evt] = getListeners(evt).filter((e) => e !== cb);
		return self;
	}
	function clear() {
		listeners = {};
	}
	const self = {
		init,
		emit,
		off,
		on,
		clear
	};
	return self;
}
var defaultOptions$1 = {
	align: "center",
	axis: "x",
	container: null,
	slides: null,
	containScroll: "trimSnaps",
	direction: "ltr",
	slidesToScroll: 1,
	inViewThreshold: 0,
	breakpoints: {},
	dragFree: false,
	dragThreshold: 10,
	loop: false,
	skipSnaps: false,
	duration: 25,
	startIndex: 0,
	active: true,
	watchDrag: true,
	watchResize: true,
	watchSlides: true,
	watchFocus: true
};
function OptionsHandler(ownerWindow) {
	function mergeOptions(optionsA, optionsB) {
		return objectsMergeDeep(optionsA, optionsB || {});
	}
	function optionsAtMedia(options) {
		const optionsAtMedia = options.breakpoints || {};
		return mergeOptions(options, objectKeys(optionsAtMedia).filter((media) => ownerWindow.matchMedia(media).matches).map((media) => optionsAtMedia[media]).reduce((a, mediaOption) => mergeOptions(a, mediaOption), {}));
	}
	function optionsMediaQueries(optionsList) {
		return optionsList.map((options) => objectKeys(options.breakpoints || {})).reduce((acc, mediaQueries) => acc.concat(mediaQueries), []).map(ownerWindow.matchMedia);
	}
	return {
		mergeOptions,
		optionsAtMedia,
		optionsMediaQueries
	};
}
function PluginsHandler(optionsHandler) {
	let activePlugins = [];
	function init(emblaApi, plugins) {
		activePlugins = plugins.filter(({ options }) => optionsHandler.optionsAtMedia(options).active !== false);
		activePlugins.forEach((plugin) => plugin.init(emblaApi, optionsHandler));
		return plugins.reduce((map, plugin) => Object.assign(map, { [plugin.name]: plugin }), {});
	}
	function destroy() {
		activePlugins = activePlugins.filter((plugin) => plugin.destroy());
	}
	return {
		init,
		destroy
	};
}
function EmblaCarousel(root, userOptions, userPlugins) {
	const ownerDocument = root.ownerDocument;
	const ownerWindow = ownerDocument.defaultView;
	const optionsHandler = OptionsHandler(ownerWindow);
	const pluginsHandler = PluginsHandler(optionsHandler);
	const mediaHandlers = EventStore();
	const eventHandler = EventHandler();
	const { mergeOptions, optionsAtMedia, optionsMediaQueries } = optionsHandler;
	const { on, off, emit } = eventHandler;
	const reInit = reActivate;
	let destroyed = false;
	let engine;
	let optionsBase = mergeOptions(defaultOptions$1, EmblaCarousel.globalOptions);
	let options = mergeOptions(optionsBase);
	let pluginList = [];
	let pluginApis;
	let container;
	let slides;
	function storeElements() {
		const { container: userContainer, slides: userSlides } = options;
		container = (isString(userContainer) ? root.querySelector(userContainer) : userContainer) || root.children[0];
		const customSlides = isString(userSlides) ? container.querySelectorAll(userSlides) : userSlides;
		slides = [].slice.call(customSlides || container.children);
	}
	function createEngine(options) {
		const engine = Engine(root, container, slides, ownerDocument, ownerWindow, options, eventHandler);
		if (options.loop && !engine.slideLooper.canLoop()) return createEngine(Object.assign({}, options, { loop: false }));
		return engine;
	}
	function activate(withOptions, withPlugins) {
		if (destroyed) return;
		optionsBase = mergeOptions(optionsBase, withOptions);
		options = optionsAtMedia(optionsBase);
		pluginList = withPlugins || pluginList;
		storeElements();
		engine = createEngine(options);
		optionsMediaQueries([optionsBase, ...pluginList.map(({ options }) => options)]).forEach((query) => mediaHandlers.add(query, "change", reActivate));
		if (!options.active) return;
		engine.translate.to(engine.location.get());
		engine.animation.init();
		engine.slidesInView.init();
		engine.slideFocus.init(self);
		engine.eventHandler.init(self);
		engine.resizeHandler.init(self);
		engine.slidesHandler.init(self);
		if (engine.options.loop) engine.slideLooper.loop();
		if (container.offsetParent && slides.length) engine.dragHandler.init(self);
		pluginApis = pluginsHandler.init(self, pluginList);
	}
	function reActivate(withOptions, withPlugins) {
		const startIndex = selectedScrollSnap();
		deActivate();
		activate(mergeOptions({ startIndex }, withOptions), withPlugins);
		eventHandler.emit("reInit");
	}
	function deActivate() {
		engine.dragHandler.destroy();
		engine.eventStore.clear();
		engine.translate.clear();
		engine.slideLooper.clear();
		engine.resizeHandler.destroy();
		engine.slidesHandler.destroy();
		engine.slidesInView.destroy();
		engine.animation.destroy();
		pluginsHandler.destroy();
		mediaHandlers.clear();
	}
	function destroy() {
		if (destroyed) return;
		destroyed = true;
		mediaHandlers.clear();
		deActivate();
		eventHandler.emit("destroy");
		eventHandler.clear();
	}
	function scrollTo(index, jump, direction) {
		if (!options.active || destroyed) return;
		engine.scrollBody.useBaseFriction().useDuration(jump === true ? 0 : options.duration);
		engine.scrollTo.index(index, direction || 0);
	}
	function scrollNext(jump) {
		scrollTo(engine.index.add(1).get(), jump, -1);
	}
	function scrollPrev(jump) {
		scrollTo(engine.index.add(-1).get(), jump, 1);
	}
	function canScrollNext() {
		return engine.index.add(1).get() !== selectedScrollSnap();
	}
	function canScrollPrev() {
		return engine.index.add(-1).get() !== selectedScrollSnap();
	}
	function scrollSnapList() {
		return engine.scrollSnapList;
	}
	function scrollProgress() {
		return engine.scrollProgress.get(engine.offsetLocation.get());
	}
	function selectedScrollSnap() {
		return engine.index.get();
	}
	function previousScrollSnap() {
		return engine.indexPrevious.get();
	}
	function slidesInView() {
		return engine.slidesInView.get();
	}
	function slidesNotInView() {
		return engine.slidesInView.get(false);
	}
	function plugins() {
		return pluginApis;
	}
	function internalEngine() {
		return engine;
	}
	function rootNode() {
		return root;
	}
	function containerNode() {
		return container;
	}
	function slideNodes() {
		return slides;
	}
	const self = {
		canScrollNext,
		canScrollPrev,
		containerNode,
		internalEngine,
		destroy,
		off,
		on,
		emit,
		plugins,
		previousScrollSnap,
		reInit,
		rootNode,
		scrollNext,
		scrollPrev,
		scrollProgress,
		scrollSnapList,
		scrollTo,
		selectedScrollSnap,
		slideNodes,
		slidesInView,
		slidesNotInView
	};
	activate(userOptions, userPlugins);
	setTimeout(() => eventHandler.emit("init"), 0);
	return self;
}
EmblaCarousel.globalOptions = void 0;
//#endregion
//#region ../../cache/modules/catalogo-papercraft-3d-b9437/node_modules/.pnpm/embla-carousel-react@8.6.0_react@19.2.4/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js
function useEmblaCarousel(options = {}, plugins = []) {
	const storedOptions = (0, import_react.useRef)(options);
	const storedPlugins = (0, import_react.useRef)(plugins);
	const [emblaApi, setEmblaApi] = (0, import_react.useState)();
	const [viewport, setViewport] = (0, import_react.useState)();
	const reInit = (0, import_react.useCallback)(() => {
		if (emblaApi) emblaApi.reInit(storedOptions.current, storedPlugins.current);
	}, [emblaApi]);
	(0, import_react.useEffect)(() => {
		if (areOptionsEqual(storedOptions.current, options)) return;
		storedOptions.current = options;
		reInit();
	}, [options, reInit]);
	(0, import_react.useEffect)(() => {
		if (arePluginsEqual(storedPlugins.current, plugins)) return;
		storedPlugins.current = plugins;
		reInit();
	}, [plugins, reInit]);
	(0, import_react.useEffect)(() => {
		if (canUseDOM() && viewport) {
			EmblaCarousel.globalOptions = useEmblaCarousel.globalOptions;
			const newEmblaApi = EmblaCarousel(viewport, storedOptions.current, storedPlugins.current);
			setEmblaApi(newEmblaApi);
			return () => newEmblaApi.destroy();
		} else setEmblaApi(void 0);
	}, [viewport, setEmblaApi]);
	return [setViewport, emblaApi];
}
useEmblaCarousel.globalOptions = void 0;
//#endregion
//#region src/components/ui/carousel.tsx
var CarouselContext = (0, import_react.createContext)(null);
function useCarousel() {
	const context = (0, import_react.useContext)(CarouselContext);
	if (!context) throw new Error("useCarousel must be used within a <Carousel />");
	return context;
}
var Carousel = (0, import_react.forwardRef)(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
	const [carouselRef, api] = useEmblaCarousel({
		...opts,
		axis: orientation === "horizontal" ? "x" : "y"
	}, plugins);
	const [canScrollPrev, setCanScrollPrev] = (0, import_react.useState)(false);
	const [canScrollNext, setCanScrollNext] = (0, import_react.useState)(false);
	const onSelect = (0, import_react.useCallback)((api) => {
		if (!api) return;
		setCanScrollPrev(api.canScrollPrev());
		setCanScrollNext(api.canScrollNext());
	}, []);
	const scrollPrev = (0, import_react.useCallback)(() => {
		api?.scrollPrev();
	}, [api]);
	const scrollNext = (0, import_react.useCallback)(() => {
		api?.scrollNext();
	}, [api]);
	const handleKeyDown = (0, import_react.useCallback)((event) => {
		if (event.key === "ArrowLeft") {
			event.preventDefault();
			scrollPrev();
		} else if (event.key === "ArrowRight") {
			event.preventDefault();
			scrollNext();
		}
	}, [scrollPrev, scrollNext]);
	(0, import_react.useEffect)(() => {
		if (!api || !setApi) return;
		setApi(api);
	}, [api, setApi]);
	(0, import_react.useEffect)(() => {
		if (!api) return;
		onSelect(api);
		api.on("reInit", onSelect);
		api.on("select", onSelect);
		return () => {
			api?.off("select", onSelect);
		};
	}, [api, onSelect]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContext.Provider, {
		"data-uid": "src/components/ui/carousel.tsx:115:7",
		"data-prohibitions": "[editContent]",
		value: {
			carouselRef,
			api,
			opts,
			orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
			scrollPrev,
			scrollNext,
			canScrollPrev,
			canScrollNext
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-uid": "src/components/ui/carousel.tsx:127:9",
			"data-prohibitions": "[editContent]",
			ref,
			onKeyDownCapture: handleKeyDown,
			className: cn("relative", className),
			role: "region",
			"aria-roledescription": "carousel",
			...props,
			children
		})
	});
});
Carousel.displayName = "Carousel";
var CarouselContent = (0, import_react.forwardRef)(({ className, ...props }, ref) => {
	const { carouselRef, orientation } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-uid": "src/components/ui/carousel.tsx:148:7",
		"data-prohibitions": "[editContent]",
		ref: carouselRef,
		className: "overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-uid": "src/components/ui/carousel.tsx:149:9",
			"data-prohibitions": "[editContent]",
			ref,
			className: cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className),
			...props
		})
	});
});
CarouselContent.displayName = "CarouselContent";
var CarouselItem = (0, import_react.forwardRef)(({ className, ...props }, ref) => {
	const { orientation } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-uid": "src/components/ui/carousel.tsx:169:7",
		"data-prohibitions": "[editContent]",
		ref,
		role: "group",
		"aria-roledescription": "slide",
		className: cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className),
		...props
	});
});
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = (0, import_react.forwardRef)(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		"data-uid": "src/components/ui/carousel.tsx:190:7",
		"data-prohibitions": "[editContent]",
		ref,
		variant,
		size,
		className: cn("absolute  h-8 w-8 rounded-full", orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollPrev,
		onClick: scrollPrev,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
			"data-uid": "src/components/ui/carousel.tsx:205:9",
			"data-prohibitions": "[editContent]",
			className: "h-4 w-4"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"data-uid": "src/components/ui/carousel.tsx:206:9",
			"data-prohibitions": "[]",
			className: "sr-only",
			children: "Previous slide"
		})]
	});
});
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = (0, import_react.forwardRef)(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollNext, canScrollNext } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		"data-uid": "src/components/ui/carousel.tsx:218:7",
		"data-prohibitions": "[editContent]",
		ref,
		variant,
		size,
		className: cn("absolute h-8 w-8 rounded-full", orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollNext,
		onClick: scrollNext,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
			"data-uid": "src/components/ui/carousel.tsx:233:9",
			"data-prohibitions": "[editContent]",
			className: "h-4 w-4"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"data-uid": "src/components/ui/carousel.tsx:234:9",
			"data-prohibitions": "[]",
			className: "sr-only",
			children: "Next slide"
		})]
	});
});
CarouselNext.displayName = "CarouselNext";
//#endregion
//#region ../../cache/modules/catalogo-papercraft-3d-b9437/node_modules/.pnpm/embla-carousel-autoplay@8.6.0_embla-carousel@8.6.0/node_modules/embla-carousel-autoplay/esm/embla-carousel-autoplay.esm.js
var defaultOptions = {
	active: true,
	breakpoints: {},
	delay: 4e3,
	jump: false,
	playOnInit: true,
	stopOnFocusIn: true,
	stopOnInteraction: true,
	stopOnMouseEnter: false,
	stopOnLastSnap: false,
	rootNode: null
};
function normalizeDelay(emblaApi, delay) {
	const scrollSnaps = emblaApi.scrollSnapList();
	if (typeof delay === "number") return scrollSnaps.map(() => delay);
	return delay(scrollSnaps, emblaApi);
}
function getAutoplayRootNode(emblaApi, rootNode) {
	const emblaRootNode = emblaApi.rootNode();
	return rootNode && rootNode(emblaRootNode) || emblaRootNode;
}
function Autoplay(userOptions = {}) {
	let options;
	let emblaApi;
	let destroyed;
	let delay;
	let timerStartTime = null;
	let timerId = 0;
	let autoplayActive = false;
	let mouseIsOver = false;
	let playOnDocumentVisible = false;
	let jump = false;
	function init(emblaApiInstance, optionsHandler) {
		emblaApi = emblaApiInstance;
		const { mergeOptions, optionsAtMedia } = optionsHandler;
		options = optionsAtMedia(mergeOptions(mergeOptions(defaultOptions, Autoplay.globalOptions), userOptions));
		if (emblaApi.scrollSnapList().length <= 1) return;
		jump = options.jump;
		destroyed = false;
		delay = normalizeDelay(emblaApi, options.delay);
		const { eventStore, ownerDocument } = emblaApi.internalEngine();
		const isDraggable = !!emblaApi.internalEngine().options.watchDrag;
		const root = getAutoplayRootNode(emblaApi, options.rootNode);
		eventStore.add(ownerDocument, "visibilitychange", visibilityChange);
		if (isDraggable) emblaApi.on("pointerDown", pointerDown);
		if (isDraggable && !options.stopOnInteraction) emblaApi.on("pointerUp", pointerUp);
		if (options.stopOnMouseEnter) eventStore.add(root, "mouseenter", mouseEnter);
		if (options.stopOnMouseEnter && !options.stopOnInteraction) eventStore.add(root, "mouseleave", mouseLeave);
		if (options.stopOnFocusIn) emblaApi.on("slideFocusStart", stopAutoplay);
		if (options.stopOnFocusIn && !options.stopOnInteraction) eventStore.add(emblaApi.containerNode(), "focusout", startAutoplay);
		if (options.playOnInit) startAutoplay();
	}
	function destroy() {
		emblaApi.off("pointerDown", pointerDown).off("pointerUp", pointerUp).off("slideFocusStart", stopAutoplay);
		stopAutoplay();
		destroyed = true;
		autoplayActive = false;
	}
	function setTimer() {
		const { ownerWindow } = emblaApi.internalEngine();
		ownerWindow.clearTimeout(timerId);
		timerId = ownerWindow.setTimeout(next, delay[emblaApi.selectedScrollSnap()]);
		timerStartTime = (/* @__PURE__ */ new Date()).getTime();
		emblaApi.emit("autoplay:timerset");
	}
	function clearTimer() {
		const { ownerWindow } = emblaApi.internalEngine();
		ownerWindow.clearTimeout(timerId);
		timerId = 0;
		timerStartTime = null;
		emblaApi.emit("autoplay:timerstopped");
	}
	function startAutoplay() {
		if (destroyed) return;
		if (documentIsHidden()) {
			playOnDocumentVisible = true;
			return;
		}
		if (!autoplayActive) emblaApi.emit("autoplay:play");
		setTimer();
		autoplayActive = true;
	}
	function stopAutoplay() {
		if (destroyed) return;
		if (autoplayActive) emblaApi.emit("autoplay:stop");
		clearTimer();
		autoplayActive = false;
	}
	function visibilityChange() {
		if (documentIsHidden()) {
			playOnDocumentVisible = autoplayActive;
			return stopAutoplay();
		}
		if (playOnDocumentVisible) startAutoplay();
	}
	function documentIsHidden() {
		const { ownerDocument } = emblaApi.internalEngine();
		return ownerDocument.visibilityState === "hidden";
	}
	function pointerDown() {
		if (!mouseIsOver) stopAutoplay();
	}
	function pointerUp() {
		if (!mouseIsOver) startAutoplay();
	}
	function mouseEnter() {
		mouseIsOver = true;
		stopAutoplay();
	}
	function mouseLeave() {
		mouseIsOver = false;
		startAutoplay();
	}
	function play(jumpOverride) {
		if (typeof jumpOverride !== "undefined") jump = jumpOverride;
		startAutoplay();
	}
	function stop() {
		if (autoplayActive) stopAutoplay();
	}
	function reset() {
		if (autoplayActive) startAutoplay();
	}
	function isPlaying() {
		return autoplayActive;
	}
	function next() {
		const { index } = emblaApi.internalEngine();
		const nextIndex = index.clone().add(1).get();
		const lastIndex = emblaApi.scrollSnapList().length - 1;
		const kill = options.stopOnLastSnap && nextIndex === lastIndex;
		if (emblaApi.canScrollNext()) emblaApi.scrollNext(jump);
		else emblaApi.scrollTo(0, jump);
		emblaApi.emit("autoplay:select");
		if (kill) return stopAutoplay();
		startAutoplay();
	}
	function timeUntilNext() {
		if (!timerStartTime) return null;
		return delay[emblaApi.selectedScrollSnap()] - ((/* @__PURE__ */ new Date()).getTime() - timerStartTime);
	}
	return {
		name: "autoplay",
		options: userOptions,
		init,
		destroy,
		play,
		stop,
		reset,
		isPlaying,
		timeUntilNext
	};
}
Autoplay.globalOptions = void 0;
//#endregion
//#region src/components/HeroCarousel.tsx
function HeroCarousel({ onScrollToProducts }) {
	const [api, setApi] = (0, import_react.useState)();
	const [currentSlide, setCurrentSlide] = (0, import_react.useState)(0);
	const autoplayPlugin = (0, import_react.useRef)(Autoplay({
		delay: 5e3,
		stopOnInteraction: true
	}));
	(0, import_react.useEffect)(() => {
		if (!api) return;
		setCurrentSlide(api.selectedScrollSnap());
		api.on("select", () => setCurrentSlide(api.selectedScrollSnap()));
	}, [api]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/components/HeroCarousel.tsx:31:5",
		"data-prohibitions": "[editContent]",
		className: "relative mb-12 group",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Carousel, {
			"data-uid": "src/components/HeroCarousel.tsx:32:7",
			"data-prohibitions": "[]",
			plugins: [autoplayPlugin.current],
			setApi,
			className: "w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-elevation border border-border/50",
			opts: { loop: true },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CarouselContent, {
					"data-uid": "src/components/HeroCarousel.tsx:38:9",
					"data-prohibitions": "[]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselItem, {
							"data-uid": "src/components/HeroCarousel.tsx:39:11",
							"data-prohibitions": "[]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/components/HeroCarousel.tsx:40:13",
								"data-prohibitions": "[]",
								className: "relative w-full h-[200px] md:h-[240px] bg-gradient-to-br from-primary to-primary/80 text-primary-foreground flex flex-col items-center justify-center p-4 md:p-6 isolation-auto select-none",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/components/HeroCarousel.tsx:41:15",
									"data-prohibitions": "[]",
									className: "flex items-center gap-3 md:gap-4 mb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hexagon, {
										"data-uid": "src/components/HeroCarousel.tsx:42:17",
										"data-prohibitions": "[editContent]",
										className: "w-10 h-10 md:w-14 md:h-14 animate-float fill-current opacity-90"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										"data-uid": "src/components/HeroCarousel.tsx:43:17",
										"data-prohibitions": "[]",
										className: "text-3xl md:text-5xl font-heading font-bold tracking-tight",
										children: "PapercraftRP"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									"data-uid": "src/components/HeroCarousel.tsx:47:15",
									"data-prohibitions": "[]",
									className: "text-sm md:text-lg text-center max-w-2xl opacity-90 font-medium leading-relaxed",
									children: "Modelos 3D Lowpoly exclusivos para você imprimir, dobrar e decorar seu mundo."
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselItem, {
							"data-uid": "src/components/HeroCarousel.tsx:53:11",
							"data-prohibitions": "[]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/components/HeroCarousel.tsx:54:13",
								"data-prohibitions": "[]",
								className: "relative w-full h-[200px] md:h-[240px] bg-slate-900 text-white flex flex-row items-center justify-center p-6 md:p-8 gap-4 md:gap-8 select-none",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/components/HeroCarousel.tsx:55:15",
									"data-prohibitions": "[]",
									className: "z-10 space-y-2 md:space-y-3 text-center md:text-left flex-1 max-w-lg",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										"data-uid": "src/components/HeroCarousel.tsx:56:17",
										"data-prohibitions": "[]",
										className: "text-2xl md:text-4xl font-heading font-bold leading-tight tracking-tight",
										children: "Papercraft Lowpoly"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										"data-uid": "src/components/HeroCarousel.tsx:59:17",
										"data-prohibitions": "[]",
										className: "text-xs md:text-sm lg:text-base text-slate-300 leading-relaxed",
										children: "Uma mistura imersiva de arte digital e montagem manual. Descubra a terapia de transformar papel plano em incríveis esculturas geométricas."
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									"data-uid": "src/components/HeroCarousel.tsx:64:15",
									"data-prohibitions": "[]",
									className: "hidden sm:flex justify-center shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										"data-uid": "src/components/HeroCarousel.tsx:65:17",
										"data-prohibitions": "[]",
										className: "relative w-28 h-28 md:w-40 md:h-40 aspect-square",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											"data-uid": "src/components/HeroCarousel.tsx:66:19",
											"data-prohibitions": "[editContent]",
											src: "https://img.usecurling.com/p/400/400?q=lowpoly+papercraft+art&color=black",
											alt: "Papercraft Art",
											className: "w-full h-full object-cover rounded-xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 border-2 border-slate-800"
										})
									})
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselItem, {
							"data-uid": "src/components/HeroCarousel.tsx:76:11",
							"data-prohibitions": "[]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/components/HeroCarousel.tsx:77:13",
								"data-prohibitions": "[]",
								className: "relative w-full h-[200px] md:h-[240px] bg-amber-500 text-amber-950 flex flex-col items-center justify-center p-4 select-none",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										"data-uid": "src/components/HeroCarousel.tsx:78:15",
										"data-prohibitions": "[]",
										className: "text-2xl md:text-4xl font-heading font-bold mb-2 md:mb-3 text-center tracking-tight flex items-center justify-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
											"data-uid": "src/components/HeroCarousel.tsx:79:17",
											"data-prohibitions": "[editContent]",
											className: "w-6 h-6 md:w-8 md:h-8 text-white fill-white/60 drop-shadow-md"
										}), "Mais Vendidos"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										"data-uid": "src/components/HeroCarousel.tsx:82:15",
										"data-prohibitions": "[]",
										className: "text-sm md:text-base text-center max-w-xl mb-4 md:mb-5 font-medium text-amber-900 leading-relaxed",
										children: "Explore nossos modelos favoritos e comece com os projetos mais aclamados."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										"data-uid": "src/components/HeroCarousel.tsx:85:15",
										"data-prohibitions": "[]",
										size: "sm",
										className: "md:h-10 px-6 md:text-base bg-amber-950 text-amber-50 hover:bg-amber-900 transition-transform shadow-md",
										onClick: onScrollToProducts,
										children: "Explorar Destaques"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselItem, {
							"data-uid": "src/components/HeroCarousel.tsx:95:11",
							"data-prohibitions": "[]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/components/HeroCarousel.tsx:96:13",
								"data-prohibitions": "[]",
								className: "relative w-full h-[200px] md:h-[240px] bg-emerald-600 text-white flex flex-col items-center justify-center p-4 select-none",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										"data-uid": "src/components/HeroCarousel.tsx:97:15",
										"data-prohibitions": "[]",
										className: "text-2xl md:text-4xl font-heading font-bold mb-2 md:mb-3 text-center tracking-tight flex items-center justify-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, {
											"data-uid": "src/components/HeroCarousel.tsx:98:17",
											"data-prohibitions": "[editContent]",
											className: "w-6 h-6 md:w-8 md:h-8"
										}), "É a sua primeira vez?"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										"data-uid": "src/components/HeroCarousel.tsx:100:15",
										"data-prohibitions": "[]",
										className: "text-sm md:text-base text-center max-w-xl mb-4 md:mb-5 text-emerald-50 font-medium leading-relaxed",
										children: "Preparamos um guia passo a passo com os materiais e técnicas corretas de montagem."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										"data-uid": "src/components/HeroCarousel.tsx:103:15",
										"data-prohibitions": "[]",
										size: "sm",
										variant: "secondary",
										asChild: true,
										className: "md:h-10 px-6 md:text-base transition-transform text-emerald-800 font-semibold shadow-md",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											"data-uid": "src/components/HeroCarousel.tsx:109:17",
											"data-prohibitions": "[]",
											to: "/como-montar",
											children: "Acessar Guia de Montagem"
										})
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselItem, {
							"data-uid": "src/components/HeroCarousel.tsx:114:11",
							"data-prohibitions": "[]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/components/HeroCarousel.tsx:115:13",
								"data-prohibitions": "[]",
								className: "relative w-full h-[200px] md:h-[240px] bg-indigo-600 text-white flex flex-row items-center justify-center p-6 md:p-8 gap-4 md:gap-8 select-none",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/components/HeroCarousel.tsx:116:15",
									"data-prohibitions": "[]",
									className: "z-10 space-y-2 md:space-y-3 text-center md:text-left flex-1 max-w-lg",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
											"data-uid": "src/components/HeroCarousel.tsx:117:17",
											"data-prohibitions": "[]",
											className: "text-2xl md:text-4xl font-heading font-bold leading-tight tracking-tight flex items-center justify-center md:justify-start gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, {
												"data-uid": "src/components/HeroCarousel.tsx:118:19",
												"data-prohibitions": "[editContent]",
												className: "w-6 h-6 md:w-8 md:h-8"
											}), "Dúvidas Frequentes"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											"data-uid": "src/components/HeroCarousel.tsx:121:17",
											"data-prohibitions": "[]",
											className: "text-xs md:text-sm lg:text-base text-indigo-100 leading-relaxed",
											children: "Tem dúvidas sobre materiais ou limites de download? Acesse nosso FAQ."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											"data-uid": "src/components/HeroCarousel.tsx:124:17",
											"data-prohibitions": "[]",
											size: "sm",
											variant: "secondary",
											asChild: true,
											className: "md:h-10 px-6 md:text-base transition-transform text-indigo-900 font-semibold shadow-md mt-2",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												"data-uid": "src/components/HeroCarousel.tsx:130:19",
												"data-prohibitions": "[]",
												to: "/faq",
												children: "Acessar FAQ"
											})
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									"data-uid": "src/components/HeroCarousel.tsx:133:15",
									"data-prohibitions": "[]",
									className: "hidden sm:flex justify-center shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										"data-uid": "src/components/HeroCarousel.tsx:134:17",
										"data-prohibitions": "[]",
										className: "relative w-28 h-28 md:w-40 md:h-40 aspect-square",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											"data-uid": "src/components/HeroCarousel.tsx:135:19",
											"data-prohibitions": "[editContent]",
											src: "https://img.usecurling.com/p/400/400?q=question+mark+3d+paper&color=blue",
											alt: "FAQ",
											className: "w-full h-full object-cover rounded-xl shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-700 border-2 border-indigo-400"
										})
									})
								})]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselPrevious, {
					"data-uid": "src/components/HeroCarousel.tsx:146:9",
					"data-prohibitions": "[editContent]",
					className: "absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/50 hover:bg-background backdrop-blur-sm border-none w-10 h-10 hidden md:flex text-foreground"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselNext, {
					"data-uid": "src/components/HeroCarousel.tsx:147:9",
					"data-prohibitions": "[editContent]",
					className: "absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/50 hover:bg-background backdrop-blur-sm border-none w-10 h-10 hidden md:flex text-foreground"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-uid": "src/components/HeroCarousel.tsx:150:7",
			"data-prohibitions": "[editContent]",
			className: "absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 z-20",
			children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				"data-uid": "src/components/HeroCarousel.tsx:152:11",
				"data-prohibitions": "[editContent]",
				onClick: () => api?.scrollTo(i),
				className: `h-2 md:h-2.5 rounded-full transition-all duration-300 ${currentSlide === i ? "w-6 md:w-8 bg-white shadow-sm" : "w-2 md:w-2.5 bg-white/40 hover:bg-white/60"}`,
				"aria-label": `Ir para slide ${i + 1}`
			}, i))
		})]
	});
}
//#endregion
//#region src/pages/Index.tsx
function Index() {
	const { products, isLoading: isProductsLoading } = useProductStore();
	const { categories, isLoading: isCategoriesLoading } = useCategoryStore();
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [filters, setFilters] = (0, import_react.useState)({
		categoryId: "all",
		sort: "relevantes",
		priceRange: [0, 200],
		difficulty: null
	});
	const handleScrollToProducts = () => {
		document.getElementById("products-section")?.scrollIntoView({ behavior: "smooth" });
		setFilters((prev) => ({
			...prev,
			sort: "mais-vendidos"
		}));
	};
	const filteredProducts = (0, import_react.useMemo)(() => {
		let result = [...products];
		if (searchQuery.trim()) {
			const query = searchQuery.toLowerCase();
			result = result.filter((p) => p.title.toLowerCase().includes(query) || p.description.toLowerCase().includes(query) || p.category.toLowerCase().includes(query) || p.tags.some((t) => t.toLowerCase().includes(query)) || query.includes("fácil") && p.difficulty <= 2 || query.includes("difícil") && p.difficulty >= 4);
		}
		if (filters.categoryId !== "all") result = result.filter((p) => p.categoryId === filters.categoryId);
		result = result.filter((p) => p.price <= filters.priceRange[1]);
		if (filters.difficulty !== null) result = result.filter((p) => p.difficulty === filters.difficulty);
		switch (filters.sort) {
			case "menor-preco":
				result.sort((a, b) => a.price - b.price);
				break;
			case "maior-preco":
				result.sort((a, b) => b.price - a.price);
				break;
			case "recentes":
				result.sort((a, b) => b.isNew === a.isNew ? 0 : b.isNew ? 1 : -1);
				break;
			case "mais-vendidos":
				result.sort((a, b) => b.isBestSeller === a.isBestSeller ? 0 : b.isBestSeller ? 1 : -1);
				break;
		}
		return result;
	}, [
		filters,
		searchQuery,
		products
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/Index.tsx:68:5",
		"data-prohibitions": "[editContent]",
		className: "container mx-auto px-4 py-8 md:py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroCarousel, {
				"data-uid": "src/pages/Index.tsx:69:7",
				"data-prohibitions": "[editContent]",
				onScrollToProducts: handleScrollToProducts
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-uid": "src/pages/Index.tsx:71:7",
				"data-prohibitions": "[]",
				className: "max-w-2xl mx-auto mb-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/Index.tsx:72:9",
					"data-prohibitions": "[]",
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"data-uid": "src/pages/Index.tsx:73:11",
						"data-prohibitions": "[]",
						className: "absolute inset-y-0 left-4 flex items-center pointer-events-none text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
							"data-uid": "src/pages/Index.tsx:74:13",
							"data-prohibitions": "[editContent]",
							className: "w-5 h-5"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						"data-uid": "src/pages/Index.tsx:76:11",
						"data-prohibitions": "[editContent]",
						type: "text",
						className: "pl-12 h-14 text-base rounded-full shadow-sm border-border bg-background focus-visible:ring-primary focus-visible:border-primary",
						placeholder: "Busca avançada (ex: modelos fáceis de montar)...",
						value: searchQuery,
						onChange: (e) => setSearchQuery(e.target.value)
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-uid": "src/pages/Index.tsx:86:7",
				"data-prohibitions": "[]",
				id: "products-section",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterBar, {
					"data-uid": "src/pages/Index.tsx:87:9",
					"data-prohibitions": "[editContent]",
					filters,
					setFilters,
					categories
				})
			}),
			isProductsLoading || isCategoriesLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-uid": "src/pages/Index.tsx:91:9",
				"data-prohibitions": "[]",
				className: "flex justify-center items-center py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-uid": "src/pages/Index.tsx:92:11",
					"data-prohibitions": "[]",
					className: "w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"
				})
			}) : filteredProducts.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-uid": "src/pages/Index.tsx:95:9",
				"data-prohibitions": "[editContent]",
				className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12 mt-8",
				children: filteredProducts.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
					"data-uid": "src/pages/Index.tsx:97:13",
					"data-prohibitions": "[editContent]",
					product
				}, product.id))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/Index.tsx:101:9",
				"data-prohibitions": "[]",
				className: "text-center py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						"data-uid": "src/pages/Index.tsx:102:11",
						"data-prohibitions": "[]",
						className: "text-xl font-heading font-semibold mb-2",
						children: "Nenhum modelo encontrado"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"data-uid": "src/pages/Index.tsx:103:11",
						"data-prohibitions": "[]",
						className: "text-muted-foreground mb-6",
						children: "Tente ajustar seus filtros para ver mais resultados."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						"data-uid": "src/pages/Index.tsx:106:11",
						"data-prohibitions": "[]",
						variant: "outline",
						onClick: () => {
							setSearchQuery("");
							setFilters({
								categoryId: "all",
								sort: "relevantes",
								priceRange: [0, 200],
								difficulty: null
							});
						},
						children: "Limpar Todos os Filtros"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Newsletter, {
				"data-uid": "src/pages/Index.tsx:123:7",
				"data-prohibitions": "[editContent]"
			})
		]
	});
}
//#endregion
export { Index as default };

//# sourceMappingURL=Index-Ba7b1Fvt.js.map