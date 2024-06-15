import { ScrollArea } from "@/components/ui/scroll-area";
import { Mail } from "@/data/mails";
import { cn } from "@/lib/utils";
import { useMail } from "@/stores/use-mail";
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
import React from "react";

interface IProps {
   mails: Mail[];
}

const MailList = ({ mails }: IProps) => {
	const [mail,setMail] = useMail();

   return (
      <ScrollArea className="h-screen">
         <div className="flex flex-col gap-1 px-4 pt-0 whitespace-nowrap">
            {mails.map((item) => (
               <button
                  key={item.id}
                  className={cn(
                     "flex flex-col items-start gap-1 rounded-lg border p-3 text-left text-sm transition-all hover:bg-slate-100",
                     mail.selected === item.id && "bg-slate-100"
                  )}
						onClick={() => {
							setMail({...mail,selected:item.id})
						}}
               >
                  <div className="flex w-full flex-col gap-1">
                     <div className="flex items-center">
                        <div className="flex items-center gap-2">
                           <div className="font-semibold">{item.name}</div>
                           {!item.read && (
                              <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                           )}
                        </div>
                        <div
                           className={cn(
                              "ml-auto text-xs",
										mail.selected === item.id
										? "text-gray-600"
										: "text-gray-900"
                           )}
                        >
                           {formatDistanceToNow(new Date(item.date))}
                        </div>
                     </div>
                     <div className="text-xs font-medium">{item.subject}</div>
                  </div>
                  <div className="line-clamp-2 text-xs text-muted-foreground text-wrap">
                     {item.text.substring(0, 300)}
                  </div>
               </button>
            ))}
         </div>
      </ScrollArea>
   );
};

export default MailList;
