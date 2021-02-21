export interface IUserModel {
	email?: string;
	name?: string;
	address: IAddressModel;
}

export interface IAddressModel {
	cep?: string;
	city?: string;
	complement?: string;
	district?: string;
	number?: number;
	state?: string;
	street?: string;
}
