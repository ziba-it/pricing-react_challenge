import { ButtonsWrapper, QuestionWrapper, TitleWrapper } from "../../ui";
import { CloseIcon } from "../../icons";
import { useCartStore } from "../../../store/cartStore";

import styles from "./ConfirmationModal.module.scss";

export default function ConfirmationModal({ name }) {
  const isModalOpen = useCartStore((state) => state.isModalOpen);
  const selectedPack = useCartStore((state) => state.selectedPack);
  const closeModal = useCartStore((state) => state.closeModal);
  const addItemToCart = useCartStore((state) => state.addItemToCart);

  const buttons = [
    {
      label: "Cancel",
      color: "orange",
      onClick: closeModal,
    },
    {
      label: "Add to Cart",
      color: "primary",
      onClick: () => {
        addItemToCart(selectedPack);
        closeModal();
      },
    },
  ];

  if (!isModalOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles["close-button"]} onClick={closeModal}>
          <CloseIcon />
        </button>
        <div className={styles["content-container"]}>
          <TitleWrapper>Add to cart?</TitleWrapper>
          <QuestionWrapper>
            Are you sure you want to add {selectedPack.title} to your cart?
          </QuestionWrapper>
        </div>
        <ButtonsWrapper buttons={buttons} />
      </div>
    </div>
  );
}
