import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type AnimationProps = {
  children: any;
};
export const PageWrapper = (props: AnimationProps) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {props.children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export const HoverAnimation = (props: AnimationProps) => {
  return (
    <>
      <AnimatePresence>
        <motion.div whileHover={{ scale: 2 }} whileTap={{ scale: 0.9 }}>
          {props.children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export const RotateOnClick = (props: AnimationProps) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <motion.div
      className="block"
      onClick={() => setIsActive(!isActive)}
      animate={{
        rotate: isActive ? 90 : 0,
      }}
    >
      {props.children}
    </motion.div>
  );
};

export const Transition = () => {
  return (
    <motion.div
      animate={{ x: 100 }}
      transition={{ ease: "easeOut", duration: 2 }}
    />
  );
};
