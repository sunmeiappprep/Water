export const MODAL_ON = 'MODAL_ON';
export const MODAL_OFF = 'MODAL_OFF';

export const open = (modalType) => {
    return {
       type: MODAL_ON,
       modalType
    }
   }
   
   export const close = () => ({
     type: MODAL_OFF
   })

