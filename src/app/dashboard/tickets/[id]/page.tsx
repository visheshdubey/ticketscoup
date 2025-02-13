import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { TicketInfoPane } from '@/features/ticket-chat/comps/ticket-info-pane';

type Props = {};

const TicketDetailPage = (props: Props) => {
    return (
        <>
            {' '}
            <div className="grow h-full flex flex-col bg-slate-200">
                <div className="w-full bg-white border-b px-4 py-0.5">
                    <div className="flex relative items-center gap-3 py-1.5">
                        <Avatar className="size-8">
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <span className="font-satoshi font-semibold">Vishesh Dubey</span>
                            <div className="flex gap-2 items-center">
                                <div className="flex gap-1  items-center text-muted-foreground text-sm">
                                    <span className="font-bold italic text-neutral-400">#</span>
                                    101
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-500 absolute right-2 size-7 flex items-center justify-center font-semibold text-primary-foreground rounded-lg text-sm">
                            22
                        </div>
                    </div>
                </div>

                <div className="w-full mx-auto h-full flex flex-col gap-5 px-4 pt-6">
                    <div className="flex gap-2">
                        <Avatar className="size-8">
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="bg-white p-2.5 rounded-md max-w-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officiis perferendis non
                            vitae, ad illo, suscipit vel error sequi fuga, laborum repellat expedita. Libero, quisquam
                            voluptatem. Voluptatum corporis rem est.
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <Avatar className="size-8">
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="bg-white p-2.5 rounded-md">Lorem ipsum dolor sit amet</div>
                    </div>
                    <div className="flex flex-row-reverse gap-2">
                        <Avatar className="size-8">
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="flex items-end flex-col gap-1">
                            <div className="bg-white p-2.5 rounded-md max-w-lg">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officiis perferendis non
                                vitae, ad illo, suscipit vel error sequi fuga, laborum repellat expedita. Libero,
                                quisquam voluptatem. Voluptatum corporis rem est.
                            </div>
                            <span className="text-xs text-muted-foreground">15:23</span>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse gap-2">
                        <Avatar className="size-8">
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="flex items-end flex-col gap-1">
                            <div className="bg-white p-2.5 rounded-md">Lorem ipsum dolor.</div>
                            <span className="text-xs text-muted-foreground">15:23</span>
                        </div>
                    </div>
                </div>
            </div>
            <TicketInfoPane />
        </>
    );
};

export default TicketDetailPage;
