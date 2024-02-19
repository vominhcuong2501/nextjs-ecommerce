'use client'
import { createContext, useState } from 'react'
import { User } from '../types/user.type'
import { ExtendedPurchase } from '../types/purchase.type'
import { getAccessTokenFromLS, getProfileFromLS } from '../types/auth'

interface AppContextInterface {
	isAuthenticated: boolean
	setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
	profile: User | null
	setProfile: React.Dispatch<React.SetStateAction<User | null>>
	extendedPurchase: ExtendedPurchase[]
	setExtendedPurchase: React.Dispatch<React.SetStateAction<ExtendedPurchase[]>>
	reset: () => void
}

const initialAppContext: AppContextInterface = {
	isAuthenticated: Boolean(getAccessTokenFromLS()),
	setIsAuthenticated: () => null,
	profile: getProfileFromLS(),
	setProfile: () => null,
	extendedPurchase: [],
	setExtendedPurchase: () => null,
	reset: () => null
}

export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialAppContext.isAuthenticated)
	const [profile, setProfile] = useState<User | null>(initialAppContext.profile)
	const [extendedPurchase, setExtendedPurchase] = useState<ExtendedPurchase[]>(initialAppContext.extendedPurchase)
	const reset = () => {
		setIsAuthenticated(false)
		setExtendedPurchase([])
		setProfile(null)
	}

	return (
		<AppContext.Provider
			value={{ isAuthenticated, setIsAuthenticated, profile, setProfile, extendedPurchase, setExtendedPurchase, reset }}
		>
			{children}
		</AppContext.Provider>
	)
}
