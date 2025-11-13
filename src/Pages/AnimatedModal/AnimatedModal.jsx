
import { animated, useTransition } from "@react-spring/web";
import * as Dialog from "@radix-ui/react-dialog";
import { styled } from "@stitches/react";
import { X } from "lucide-react";

const AnimatedModal = ({ isOpen, onClose, title, children }) => {
  const transitions = useTransition(isOpen, {
    from: { opacity: 0, transform: "translate(-50%, -45%) scale(0.95)" },
    enter: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
    leave: { opacity: 0, transform: "translate(-50%, -45%) scale(0.95)" },
    config: { tension: 300, friction: 20 },
  });

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal forceMount>
        {transitions(
          (styles, item) =>
            item && (
              <>
                <Overlay
                  as={animated.div}
                  style={{ opacity: styles.opacity }}
                />
                <Content as={animated.div} style={styles}>
                  <Header>
                    <Title>{title}</Title>
                    <Dialog.Close asChild>
                      <CloseButton>
                        <X size={20} />
                      </CloseButton>
                    </Dialog.Close>
                  </Header>
                  <div>{children}</div>
                </Content>
              </>
            )
        )}
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AnimatedModal;


const Overlay = styled("div", {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 50,
});

const Content = styled("div", {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#fff",
  borderRadius: "12px",
  padding: "24px",
  width: "90%",
  maxWidth: "450px",
  boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
  zIndex: 100,
});

const Header = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "16px",
});

const Title = styled("h2", {
  fontSize: "18px",
  fontWeight: "600",
});

const CloseButton = styled("button", {
  border: "none",
  background: "transparent",
  cursor: "pointer",
  color: "#444",
});
