import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

/**
 * SharedLayoutTransition
 *
 * @param {ReactNode|function} preview - Compact element (button/card).
 *        If function, gets `{ open }`.
 * @param {ReactNode|function} expanded - Expanded element (modal).
 *        If function, gets `{ close }`.
 * @param {string} layoutId - Unique id for shared layout animation
 * @param {string} className - Extra classes for wrapper
 */
const SharedLayoutTransition = ({
  preview,
  expanded,
  layoutId,
  className = "",
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <LayoutGroup>
      {/* Preview */}
      <motion.div layoutId={layoutId} className="w-full h-full">
        {typeof preview === "function"
          ? preview({ open: handleOpen })
          : preview}
      </motion.div>

      {/* Expanded */}
      {/* <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            
            <motion.div
              className="absolute w-screen h-screen inset-0 backdrop-brightness-75 backdrop-blur-sm cursor-pointer"
              onClick={handleClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            />

           
            <motion.div
              layoutId={layoutId}
              className="grid place-content-center z-50"
            >
              {typeof expanded === "function"
                ? expanded({ close: handleClose })
                : expanded}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm cursor-pointer"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Expanded content synced via layoutId */}
            <motion.div layoutId={layoutId} className="relative z-10">
              {typeof expanded === "function"
                ? expanded({ close: () => setOpen(false) })
                : expanded}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
};

export default SharedLayoutTransition;
