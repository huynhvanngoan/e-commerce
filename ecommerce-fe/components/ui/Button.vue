<template>
    <button
        :class="[
            'px-4 py-2 rounded-full transition-all duration-300 ease-in-out flex items-center justify-center',
            sizeClasses,
            variantClasses,
            { 'opacity-50 cursor-not-allowed': disable },
        ]"
        :disabled="disable"
        @click="$emit('click', $event)"
    >
        <span v-if="loading" class="mr-2">
            <svg
                class="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                view-box="0 0 24 24"
            >
                <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                ></circle>
                <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
            </svg>
        </span>
        <span v-if="icon && iconPosition === 'left'" :class="iconClasses">
            <!-- <component v-if="typeof icon === 'object'" :is="icon" />
            <i :class="icon"></i> -->
            <component :is="icon" v-if="icon" class="w-5 h-5 mr-2" />
        </span>
        <span v-if="icon && iconPosition === 'right'" :class="iconClasses">
            <component v-if="typeof icon === 'object'" :is="icon" />
            <i :class="icon"></i>
        </span>
        <slot>{{ label }}</slot>
    </button>
</template>

<script setup>
const props = defineProps({
    label: {
        type: String,
        default: "Button",
    },
    size: {
        type: String,
        default: "medium",
        validator: (value) => ["small", "medium", "large"].includes(value),
    },
    variant: {
        type: String,
        default: "primary",
        validator: (value) =>
            ["primary", "secondary", "outline"].includes(value),
    },
    icon: {
        type: String,
        default: "",
    },
    iconPosition: {
        type: String,
        default: "left",
        validator: (value) => ["left", "right"].includes(value),
    },
    disable: {
        type: Boolean,
        default: false,
    },
    loading: {
        type: Boolean,
        default: false,
    },
});

const variantClasses = computed(() => {
    switch (props.variant) {
        case "primary":
            return "bg-blue-600 text-white hover:bg-blue-700";
        case "secondary":
            return "bg-gray-200 text-gray-800 hover:bg-gray-300";
        case "outline":
            return "bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50";
        default:
            return "";
    }
});

const sizeClasses = computed(() => {
    switch (props.size) {
        case "small":
            return "text-sm";
        case "large":
            return "text-lg px-6 py-3";
        default:
            return "text-base";
    }
});

const iconClasses = computed(() => {
    return [
        props.size === "small"
            ? "w-4 h-4"
            : props.size === "large"
            ? "w-6 h-6"
            : "w-5 h-5 text-white",
        props.iconPosition === "left" ? "mr-2" : "ml-2",
    ];
});

defineEmits(["click"]);
</script>

<style lang="scss" scoped></style>
