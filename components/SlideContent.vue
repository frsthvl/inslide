<template>
    <div
        v-html="content"
        class="contentbox typography px-10 overflow-hidden"
        style="width: 100vw; height: 100vh"
    ></div>
</template>

<script>
import textFit from "textfit";

export default {
    props: {
        content: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            textFitOptions: {
                alignHoriz: true,
                alignVert: true,
                maxFontSize: 1000,
                multiLine: true,
            },
        };
    },
    methods: {
        fitText() {
            textFit(this.$el, this.textFitOptions);

            document.querySelectorAll(".contentbox a").forEach((element) => {
                element.setAttribute("target", "_blank");
            });
        },
    },
    mounted() {
        this.fitText();
        window.addEventListener("resize", this.fitText);
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.fitText);
    },
};
</script>
