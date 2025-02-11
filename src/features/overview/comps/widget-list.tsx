import Card from '@/components/cards/stat-card';

type WidgetListProps = {
    showMore: boolean;
    widgets: { title: string; value: string; growth: string }[];
};

export function WidgetList({ showMore, widgets }: WidgetListProps) {
    return (
        <>
            {widgets.slice(0, showMore ? widgets.length : 6).map((widget, index) => (
                <div
                    key={widget.title}
                    className={`rounded-[20px] min-w-[155px] md:min-w-[264px] md:h-[136px]  h-[92px] bg-white 
                  ${index % 2 == 0 ? 'md:bg-[#E2EFFD]' : 'md:bg-[#EAECFC]'}
                `}
                >
                    <Card info={widget} />
                </div>
            ))}
        </>
    );
}
