"use client"

import { Companion, Message } from "@prisma/client"

interface ChatHeaderProps {
  companion: Companion & {
    message: Message[]
    _count: {
      message: number
    }
  }
}

export const ChatHeader = ({
  companion
}: ChatHeaderProps) => {
  return (
    <div className="flex w-full justify-between items-center border-b border-primary/10 pb-4">Chat Header</div>
  )
}