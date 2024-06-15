"use client";

import { Input } from "@/components/ui/input";
import {
   ResizableHandle,
   ResizablePanel,
   ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Inbox, File, Search } from "lucide-react";
import React from "react";
import MailboxSwitcher from "./_components/mailbox-switcher";
import NavList from "@/components/nav-list";
import { NavItems } from "@/models/commons/nav-items";
import { mails } from "@/data/mails";
import { TreeView } from "@/components/extensions/tree-view";
import { elements } from "@/data/tree";
import MailList from "./_components/mail-list";

const mailFolders : NavItems[] = [
   {
      title: "Inbox",
      label: "128",
      icon: Inbox,
      variant: "default",
   },
   {
      title: "Drafts",
      label: "9",
      icon: File,
      variant: "ghost",
   },
]

const Dashboard = () => {
   return (
      <main className="w-full flex h-[100vh]">
         <ResizablePanelGroup
            direction="horizontal"
            className="h-full max-h-[800px] items-stretch"
         >
            <ResizablePanel defaultSize={250} minSize={15} maxSize={20}>
               <div
                  className={cn("flex h-[52px] items-center justify-center p-3")}
               >
                  <MailboxSwitcher />
               </div>
               <Separator />
               <div>
               <TreeView
                  elements={elements}
                  initialSelectedId="3"
                  initialExpendedItems={["1", "2"]}
                  className="min-h-[450px]"
               />
                  <Separator />
               </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={440} minSize={30}>
               <Tabs defaultValue="all">
                  <div className="flex items-center px-4 py-2">
                     <h1 className="text-xl font-bold">Inbox</h1>
                     <TabsList className="ml-auto">
                        <TabsTrigger
                           value="all"
                           className="text-zinc-600 dark:text-zinc-200"
                        >
                           All mail
                        </TabsTrigger>
                        <TabsTrigger
                           value="unread"
                           className="text-zinc-600 dark:text-zinc-200"
                        >
                           Unread
                        </TabsTrigger>
                     </TabsList>
                  </div>
                  <Separator />

                  <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                     <form>
                        <div className="relative">
                           <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                           <Input placeholder="Search" className="pl-8" />
                        </div>
                     </form>
                  </div>
                  <TabsContent value="all">
                     <MailList 
                        mails={mails}
                     />
                  </TabsContent>
                  <TabsContent value="unread">
                     <MailList 
                        mails={mails}
                     />
                  </TabsContent>
               </Tabs>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={665}></ResizablePanel>
         </ResizablePanelGroup>
      </main>
   );
};

export default Dashboard;
