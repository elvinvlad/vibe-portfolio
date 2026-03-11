import { cn } from "../../lib/utils";
import {
    Bot,
    Sparkles,
    Mic,
    Workflow,
    Search,
    TrendingUp,
} from "lucide-react";
import { features as dataFeatures } from "../../Network/data";

const iconMap = {
    Bot: <Bot size={24} />,
    Sparkles: <Sparkles size={24} />,
    Mic: <Mic size={24} />,
    Workflow: <Workflow size={24} />,
    Search: <Search size={24} />,
    TrendingUp: <TrendingUp size={24} />
};

export function FeaturesSectionWithHoverEffects() {
    const features = dataFeatures.map(f => ({
        ...f,
        icon: iconMap[f.icon]
    }));

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
            {features.map((feature, index) => (
                <Feature key={feature.title} {...feature} index={index} />
            ))}
        </div>
    );
}

const Feature = ({
    title,
    description,
    icon,
    index,
}) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r py-10 relative group/feature border-white/10",
                (index === 0 || index === 3) && "lg:border-l border-white/10",
                index < 3 && "lg:border-b border-white/10"
            )}
        >
            {index < 3 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
            )}
            {index >= 3 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10 text-primary">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-white/10 group-hover/feature:bg-primary transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white font-heading">
                    {title}
                </span>
            </div>
            <p className="text-sm text-text-body max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>
    );
};
