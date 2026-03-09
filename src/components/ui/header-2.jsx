import React from 'react';
import { Button, buttonVariants } from './button';
import { cn } from '../../lib/utils';
import { MenuToggleIcon } from './menu-toggle-icon';
import { useScroll } from './use-scroll';
import { Bot } from 'lucide-react';

export function Header() {
    const [open, setOpen] = React.useState(false);
    const scrolled = useScroll(10);

    const links = [
        { label: 'Услуги', href: '#features' },
        { label: 'Портфолио', href: '#social-proof' },
        { label: 'Контакты', href: '#contact' },
    ];

    React.useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <header
            className={cn(
                'fixed top-0 z-50 mx-auto w-full md:left-1/2 md:-translate-x-1/2 md:max-w-5xl md:mt-4 border-b border-transparent md:rounded-full md:border md:transition-all md:ease-out',
                {
                    'bg-[#10101E]/60 supports-[backdrop-filter]:bg-[#10101E]/40 border-white/5 backdrop-blur-xl md:top-4 md:shadow-lg':
                        scrolled && !open,
                    'bg-[#0A0A14]/95 backdrop-blur-xl md:bg-transparent md:backdrop-blur-none': open,
                    'bg-transparent': !scrolled && !open,
                },
            )}
        >
            <nav
                className={cn(
                    'flex h-16 w-full items-center justify-between px-6 md:h-14 md:transition-all md:ease-out',
                    {
                        'md:px-4': scrolled,
                    },
                )}
            >
                <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Bot size={18} className="text-white" />
                    </div>
                    <span className="font-heading font-black text-xl tracking-wide text-white">VLADOS</span>
                </div>

                <div className="hidden items-center gap-2 md:flex bg-white/5 rounded-full px-2 py-1">
                    {links.map((link, i) => (
                        <a key={i} className={cn(buttonVariants({ variant: 'ghost' }), "rounded-full hover:bg-white/10 hover:text-white transition-colors")} href={link.href}>
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="hidden md:flex gap-2">
                    <Button asChild className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-accent text-white rounded-full shadow-[0_0_15px_rgba(123,97,255,0.3)] hover:shadow-[0_0_25px_rgba(123,97,255,0.5)] transition-all">
                        <a href="#contact">Заказать</a>
                    </Button>
                </div>

                <Button size="icon" variant="ghost" onClick={() => setOpen(!open)} className="md:hidden text-white hover:bg-white/10">
                    <MenuToggleIcon open={open} className="size-6" duration={300} />
                </Button>
            </nav>

            <div
                className={cn(
                    'fixed top-16 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden bg-[#0A0A14]/95 backdrop-blur-xl md:hidden',
                    open ? 'block' : 'hidden',
                )}
            >
                <div
                    data-slot={open ? 'open' : 'closed'}
                    className={cn(
                        'flex h-full w-full flex-col gap-y-6 p-6 overflow-y-auto',
                    )}
                >
                    <div className="grid gap-y-4">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                className="text-2xl font-heading font-bold text-white/80 hover:text-white hover:translate-x-2 transition-all"
                                href={link.href}
                                onClick={() => setOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <div className="flex flex-col gap-4 mt-auto pb-8">
                        <Button className="w-full bg-gradient-to-r from-primary to-primary-light text-white rounded-2xl h-14 text-lg" onClick={() => setOpen(false)} asChild>
                            <a href="#contact">Заказать консультацию</a>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
