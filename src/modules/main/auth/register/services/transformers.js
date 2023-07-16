const transformers = {
	loginEditTransformers: (userData, userId) => {
		return {
			userCode: userId,
			mobile: userData.mobile,
			email: userData.email,
			password: userData.password,
			isActive: true,
			loginId: 0,
		};
	},
	loginAuthenticateTransformers: (userData, userId) => {
		return {
			loginId: 0,
			userCode: 0,
			mobile: "string",
			email: "string",
			isActive: true,
			password: "string",
			userCodeNavigation: {
				userId: 0,
				firstName: "string",
				lastName: "string",
				fatherName: "string",
				birthDate: "2023-05-06T19:43:12.503Z",
				nationalCode: "string",
				shsh: "string",
				mobile: "string",
				phone: "string",
				postalCode: "string",
				address: "string",
				accountBankName: "string",
				accountNumber: "string",
				isActive: true,
				type: 0,
				affiliateCode: 0,
				mobileKyc: true,
				emailKyc: true,
				typeNavigation: {
					baseInfoId: 0,
					type: "string",
					description: "string",
					pirority: 0,
				},
			},
		};
	},
};

export default transformers;
