export enum ConsultantsActionTypes {
  UpdateConsultants = '[Consultants] Update consultants',
  Add = '[Consultants] Add consultant to cart',
  Remove = '[Consultants] Remove consultant from cart',
}

export const UpdateConsultants = (payload) => ({
  type: ConsultantsActionTypes.UpdateConsultants,
  payload,
});

export const AddToCart = (payload) => {
  return {
    type: ConsultantsActionTypes.Add,
    payload,
  };
};

export const RemoveFromCart = (payload) => ({
  type: ConsultantsActionTypes.Remove,
  payload,
});
