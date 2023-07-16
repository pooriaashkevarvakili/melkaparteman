import { dateToGregorian, dateToInitializeOnForm, dateToPersian } from "@/utils/globalHandlers";

const transformers = {
	usersTransformers: (data) => {
		if (Array.isArray(data)) {
			const reversed = data.reverse();
			return reversed.map((item, idx) => ({
				userId: item.userId,
				userName: item.userName,
				firstName: item.firstName,
				lastName: item.lastName,
				fatherName: item.fatherName,
				nationalCode: item.nationalCode,
				mobile: item.mobile,
				phone: item.phone,
				postalCode: item.postalCode,
				address: item.address,
				accountBankName: item.accountBankName,
				accountNumber: item.accountNumber,
				isActive: item.isActive,
				type: item.type,
				typeName: switchers.userType(item.type),
				affiliateCode: `${item.affiliateCode || ""}`,
				mobileKyc: item.mobileKyc,
				emailKyc: item.emailKyc,
				documentKYC: item.documentKyc,
				shsh: item.shsh,
				typeNavigation: item.typeNavigation,
				// array
				logins: item.logins,
				orders: item.orders,
				wallets: item.wallets,
				// transformed
				creationDate: dateToPersian(item.birthDate),
				birthDateDisplay: dateToPersian(item.birthDate),
				birthDate: dateToInitializeOnForm(dateToPersian(item.birthDate)),
				fullName: `${item.firstName || ""} ${item.lastName || ""}`,
				row: idx + 1,
				defaultData: item,
			}));
		} else {
			return [];
		}
	},
	userAddTransformers: ({ birthDate, ...newUserData }, kycStatus = {}) => {
		return {
			...newUserData,
			birthDate: dateToGregorian(birthDate.format("YYYY-MM-DD")),
			userId: 0,
			mobileKyc: true,
			emailKyc: false,
			documentKYC: false,
			...kycStatus,
		};
	},
	userEditTransformers: ({
		birthDate,
		userId,
		shsh,
		nationalCode,
		firstName,
		lastName,
		fatherName,
		affiliateCode,
		type,
		isActive,
		mobile,
		phone,
		postalCode,
		address,
		accountNumber,
		accountBankName,
		mobileKyc,
		emailKyc,
		documentKYC,
	}) => {
		return {
			birthDate: dateToGregorian(birthDate.format("YYYY-MM-DD")),
			userId,
			shsh,
			nationalCode,
			firstName,
			lastName,
			fatherName,
			affiliateCode,
			type,
			isActive,
			mobile,
			phone,
			postalCode,
			address,
			accountNumber,
			accountBankName,
			mobileKyc,
			emailKyc,
			documentKYC,
		};
	},
	userSwitchTransformers: (
		{
			birthDate,
			userId,
			shsh,
			nationalCode,
			firstName,
			lastName,
			fatherName,
			affiliateCode,
			type,
			isActive,
			mobile,
			phone,
			postalCode,
			address,
			accountNumber,
			accountBankName,
			documentKYC,
		},
		updatedStatus,
	) => {
		return {
			userId: userId,
			mobileKyc: updatedStatus,
			emailKyc: updatedStatus,
			birthDate: dateToGregorian(birthDate.format("YYYY-MM-DD")),
			shsh,
			nationalCode,
			firstName,
			lastName,
			fatherName,
			affiliateCode,
			type,
			isActive,
			mobile,
			phone,
			postalCode,
			address,
			accountNumber,
			accountBankName,
			documentKYC,
		};
	},
	securitiesTransformers: (data) => {
		if (Array.isArray(data)) {
			return data.map((item, idx) => ({
				securitiesId: item.securitiesId,
				name: item.name,
				companyName: item.companyName,
				allStock: item.allStock,
				pricePerStock: item.pricePerStock,
				startStockCount: item.startStockCount,
				securitiesFee: item.securitiesFee,
				commission: item.commission,
				lastPrice: item.lastPrice,
				statusCode: item.statusCode,
				statusCodeNavigation: item.statusCodeNavigation,
				orders: item.orders,
				// transformed
				statusName: switchers.securityType(item.statusCode),
				registerDate: dateToPersian(item.registerDate),
				row: idx + 1,
				defaultData: item,
			}));
		} else {
			return [];
		}
	},
	securitiesAddTransformers: ({ statusCode, ...updateSecurityData }, securitiesId = 0) => {
		return {
			...updateSecurityData,
			statusCode: statusCode ? 1 : 0,
			securitiesId: securitiesId,
		};
	},
	walletsTransformers: (data) => {
		if (Array.isArray(data)) {
			const numberWithCommas = (number) => {
				return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			};
			const reversed = data.reverse();
			return reversed.map((item) => ({
				walletId: item.walletId,
				userCode: item.userCode,
				// userCode: item.firstName,
				// userCode: item.lastName,
				debtor: item.debtor && item.debtor.toLocaleString(),
				creditor: item.creditor && item.creditor.toLocaleString(),
				description: item.description && numberWithCommas(item.description),
				amount: item.amount && item.amount.toLocaleString(),
				userCodeNavigation: item.userCodeNavigation,
				// transformed
				registerDate: dateToPersian(item.registerDate),
				defaultData: item,
			}));
		} else {
			return [];
		}
	},
	walletAddTransformers: (formValues, type, userId) => {
		return {
			userCode: userId,
			type: type,
			amountWallet: formValues.amount,
			walletId: 0,
		};
	},
};

export const switchers = {
	userType: (type) => {
		const options = {
			1: "مشتری",
			2: "ادمین",
		};
		return options[type] || "";
	},
	securityType: (type) => {
		const options = {
			1: "عرضه اولیه",
			2: "درحال جذب سرمایه",
			3: "غیر فعال",
			4: "خاتمه یافته",
		};
		return options[type] || "";
	},
	orderType: (type) => {
		const options = {
			7: "خرید",
			8: "فروش",
		};
		return options[type] || "";
	},
};

export default transformers;
