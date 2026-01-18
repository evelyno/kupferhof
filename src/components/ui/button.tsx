import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rosental-400 disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                default:
                    'bg-stone-900 text-white hover:bg-rosental-500 shadow-lg hover:shadow-xl transition-all',
                outline:
                    'border border-stone-200 bg-transparent shadow-sm hover:bg-stone-100 hover:text-stone-900',
                rosental:
                    'bg-rosental-500 text-white hover:bg-rosental-600 shadow-lg shadow-rosental-200',
                ghost: 'hover:bg-stone-100 hover:text-stone-900',
                link: 'text-stone-900 underline-offset-4 hover:underline',
            },
            size: {
                default: 'h-10 px-8 py-4',
                sm: 'h-9 px-4 rounded-md',
                lg: 'h-11 px-8 rounded-md',
                icon: 'h-10 w-10',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
