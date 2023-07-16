import { useDeferredValue, useEffect, useState } from "react";

 const useCardValue = (perValues = {}, form) => {
	const [updateCard, setUpdateCard] = useState(1);
	const [values, setValues] = useState({});
	// useDeferredValue
	const cardValues = useDeferredValue(values);
	// setData
	useEffect(() => {
		if ((perValues, form)) {
			const { lastName, firstName, accountNumber, accountBankName } = Object.assign(
				{},
				form.getFieldsValue(),
				perValues,
			);
			setValues({
				number: accountNumber || "",
				bankName: accountBankName || "",
				cardName: `${firstName || ""} ${lastName || ""}`,
			});
		}
	}, [perValues, form, updateCard]);
	// return object
	return { cardValues, setUpdate: () => setUpdateCard((value) => value + 1) };
};
export default useCardValue
