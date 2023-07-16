import { Icons, Timer } from "@/components";

export const CardTitle = ({ setHaveDrawer }) => (
    <div className="flex justify-between align-middle">
        <Timer />
        <div className="pt-1">
            <Icons
                type="CloseCircleOutlined"
                classes="icon-delete"
                title="بستن سبد"
                onClick={() =>
                    setHaveDrawer({
                        flag: false,
                        type: "",
                    })
                }
                style={{ color: "#FFFFFF" }}
            />
        </div>
    </div>
);

export const CartTitle = ({ resetForm, title = "" }) => (
    <div className="flex justify-between align-middle">
        <span className="text-lg">{title}</span>
        <div className="pt-1">
            <Icons type="RedoOutlined" title="ریست فرم" onClick={resetForm} />
        </div>
    </div>
);

export const cartOptions = (haveDrawer) => ({
    headStyle: {
        backgroundColor: haveDrawer.type === "buy" ? "#18A979" : "#d73e36",
        color: "white",
    },
    bordered: false,
});

export const inputOptions = {
    type: "number",
    required: true,
    size: "middle",
    min: 0,
    style: {
        width: "100%",
    },
};

export const options = {
    buy: {
        okType: "dashed",
        title: "آیا از خرید خود اطمینان دارید ؟",
        btnLabel: "خرید",
    },
    sale: {
        okType: "danger",
        title: "آیا از فروش خود اطمینان دارید ؟",
        btnLabel: "فروش",
    },
};