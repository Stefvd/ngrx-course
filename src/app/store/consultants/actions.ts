export enum ConsultantsActions {
  UpdateConsultants = '[Consultants] Update consultants',
  Add = '[Consultants] Add consultant to cart',
  Remove = '[Consultants] Remove consultant from cart',
}

export const UpdateConsultants = (payload) => ({
  type: ConsultantsActions.UpdateConsultants,
  payload,
});

export const AddToCart = (payload) => {
  return {
    type: ConsultantsActions.Add,
    payload,
  };
};

export const RemoveFromCart = (payload) => ({
  type: ConsultantsActions.Remove,
  payload,
});
