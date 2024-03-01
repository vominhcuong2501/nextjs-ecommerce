'use client'
import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api'
import Image from 'next/image'
import React, { useCallback, useState } from 'react'

const containerStyle = {
	width: '100%',
	height: '100%'
}

function Map() {
	const positions = {
		lat: 10.75087,
		lng: 106.68351
	}

	const [activeMarker, setActiveMarker] = useState(null)

	const handleActiveMarker = (marker: number | null) => {
		if (marker === activeMarker) {
			return
		}
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		setActiveMarker(marker)
	}

	const locales = [
		{
			office_id: 1,
			office_icon: './assets/icon/icon-flag-vn.svg',
			office_lat: '10.75087',
			office_lng: '106.68351',
			office_email: 'minhcuongvo2501@gmail.com',
			office_phone: '0764713925',
			office_name: 'Vietnam Office',
			office_address: 'District 08, Ho Chi Minh City',
			office_working: '9AM - 6PM GMT+1 (Mon – Fri)'
		}
	]

	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: 'AIzaSyCmKa2mr1-jdJ7leJHBzBQwMY0CWv6LIbw'
	})

	const handleOnLoad = useCallback(() => {
		const bounds = new google.maps.LatLngBounds()
		locales.forEach((item) =>
			bounds.extend({
				lat: +item.office_lat,
				lng: +item.office_lng
			})
		)
	}, [])

	return isLoaded ? (
		<div className='pb-0 lg:pb-[40px]'>
			<div className='max-w-[1360px] mx-auto h-[450px] md:rounded-2xl overflow-hidden'>
				<GoogleMap
					mapContainerStyle={containerStyle}
					onLoad={handleOnLoad}
					zoom={15}
					center={positions}
					onClick={() => setActiveMarker(null)}
				>
					{locales.map((item) => {
						const {
							office_id,
							office_icon,
							office_lat,
							office_lng,
							office_email,
							office_phone,
							office_name,
							office_address,
							office_working
						} = item
						return (
							<Marker
								key={office_id}
								icon={{
									url: `./assets/contact-us/icon-location.svg`,
									anchor: new google.maps.Point(5, 58)
								}}
								position={{
									lat: +office_lat,
									lng: +office_lng
								}}
								onClick={() => handleActiveMarker(office_id)}
							>
								{activeMarker === office_id ? (
									<InfoWindow onCloseClick={() => setActiveMarker(null)}>
										<div>
											<div className='flex items-center pb-1 border-b border-b-neutral-3'>
												<Image
													src={office_icon}
													width={29}
													height={20}
													loading='lazy'
													alt={office_name}
													title={office_name}
													className='mr-3 w-[24.2px] h-[16px]'
												/>
												<h3 className='text-14 font-semibold leading-1-4 text-neutral-8'>{office_name}</h3>
											</div>
											<ul className='mt-2'>
												<li className='flex py-1 text-12 font-normal leading-1-4 text-neutral-8'>
													<Image
														src={`./assets/contact-us/icon-local-map.svg`}
														width={24}
														height={24}
														loading='lazy'
														alt={office_address}
														title={office_address}
														className='mr-2 w-[16px] h-[16px]'
													/>
													{office_address}
												</li>

												<li className='flex py-1 text-12 font-normal leading-1-4 text-neutral-8 hover:text-orange-11'>
													<Image
														src={`./assets/contact-us/icon-mail-map.svg`}
														width={24}
														height={24}
														loading='lazy'
														alt={office_email}
														title={office_email}
														className='mr-2 w-[16px] h-[16px]'
													/>
													<a href={`mailto:${office_email}`} title={office_email} target='_blank'>
														{office_email}
													</a>
												</li>
												{office_phone ? (
													<li className='flex py-1 text-12 font-normal leading-1-4 text-neutral-8 hover:text-orange-11'>
														<Image
															src={`./assets/contact-us/icon-phone-map.svg`}
															width={24}
															height={24}
															loading='lazy'
															alt={office_phone}
															title={office_phone}
															className='mr-2 w-[16px] h-[16px]'
														/>
														<a href={`tel:${office_phone.replaceAll(' ', '')}`} title={office_phone} target='_blank'>
															{office_phone}
														</a>
													</li>
												) : (
													''
												)}
												<li className='flex py-1 text-12 font-normal leading-1-4 text-neutral-8'>
													<Image
														src={`./assets/contact-us/icon-clock-map.svg`}
														width={24}
														height={24}
														loading='lazy'
														alt={office_working}
														title={office_working}
														className='mr-2 w-[16px] h-[16px]'
													/>
													{office_working}
												</li>
											</ul>
										</div>
									</InfoWindow>
								) : null}
							</Marker>
						)
					})}
				</GoogleMap>
			</div>
		</div>
	) : (
		<></>
	)
}

export default React.memo(Map)
