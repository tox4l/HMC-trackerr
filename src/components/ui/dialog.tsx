import * as React from "react"

const DialogContext = React.createContext<{
  open: boolean;
  onOpenChange: (open: boolean) => void;
} | null>(null);

const Dialog = ({ children, open, onOpenChange }: {
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onOpenChange(false);
      }
    };

    if (open) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onOpenChange]);

  return (
    <DialogContext.Provider value={{ open, onOpenChange }}>
      {children}
    </DialogContext.Provider>
  );
};

const DialogContent = ({ children, className }: {
  children: React.ReactNode;
  className?: string;
}) => {
  const context = React.useContext(DialogContext);

  if (!context?.open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
      onClick={() => context.onOpenChange(false)}
    >
      <div
        className={`glass-card rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto ${className || ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

const DialogHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="p-6 pb-0">
    {children}
  </div>
);

const DialogTitle = ({ children, className }: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h2 className={`text-lg font-semibold ${className || ''}`}>
    {children}
  </h2>
);

const DialogDescription = ({ children, className }: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p className={`text-sm text-muted-foreground ${className || ''}`}>
    {children}
  </p>
);

const DialogFooter = ({ children }: { children: React.ReactNode }) => (
  <div className="flex justify-end gap-2 p-6 pt-0">
    {children}
  </div>
);

const DialogTrigger = ({
  children,
  asChild
}: {
  children: React.ReactElement;
  asChild?: boolean;
}) => {
  const context = React.useContext(DialogContext);

  if (!context) {
    throw new Error('DialogTrigger must be used within a Dialog');
  }

  const { onOpenChange } = context;

  if (asChild) {
    const child = children as React.ReactElement<{ onClick?: (event: React.MouseEvent) => void }>;
    return React.cloneElement(child, {
      onClick: (event: React.MouseEvent) => {
        child.props.onClick?.(event);
        onOpenChange(true);
      }
    });
  }

  return (
    <button
      type="button"
      onClick={() => onOpenChange(true)}
      className="w-full text-left"
    >
      {children}
    </button>
  );
};

export {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
}