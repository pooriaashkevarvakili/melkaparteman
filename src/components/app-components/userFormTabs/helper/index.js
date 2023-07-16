import { useDeferredValue, useEffect, useState } from "react";

export const useCardValue = (form) => {
	const [updateCard, setUpdateCard] = useState(1);
	const [values, setValues] = useState({});
	// useDeferredValue
	const cardValues = useDeferredValue(values);
	// setData
	useEffect(() => {
		if ((form)) {
			const { lastName, firstName, accountNumber, accountBankName } = form.getFieldsValue()
			setValues({
				number: accountNumber || "",
				bankName: accountBankName || "",
				cardName: `${firstName || ""} ${lastName || ""}`,
			});
		}
	}, [form, updateCard]);
	// return object
	return { cardValues, setUpdate: () => setUpdateCard((value) => value + 1) };
};
