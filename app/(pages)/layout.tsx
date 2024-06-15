"use client"

import React, { ReactNode } from 'react'

const AppLayout = ({children}: {children: ReactNode}) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default AppLayout