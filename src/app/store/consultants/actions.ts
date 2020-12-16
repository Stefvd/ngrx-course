export enum ConsultantsActions {
  FetchConsultants = '[Consultants] Fetch consultants',
  UpdateConsultants = '[Consultants] Update consultants',
  Add = '[Consultants] Add consultant to cart',
  Remove = '[Consultants] Remove consultant from cart',
}

export const FetchConsultants = () => ({
  type: ConsultantsActions.FetchConsultants,
});

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
