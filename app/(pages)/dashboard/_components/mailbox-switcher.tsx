import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectLabel,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";

import React from "react";

const MailboxSwitcher = () => {
   return (
      <Select>
         <SelectTrigger className="min-w-[180px]">
            <SelectValue placeholder="Select Mailbox" />
         </SelectTrigger>
         <SelectContent>
            <SelectGroup>
               <SelectLabel>Mailbox</SelectLabel>
               <SelectItem value="a.mercado@crossworldmarine.com">
                  a.mercado@crossworldmarine.com
               </SelectItem>
            </SelectGroup>
         </SelectContent>
      </Select>
   );
};

export default MailboxSwitcher;
