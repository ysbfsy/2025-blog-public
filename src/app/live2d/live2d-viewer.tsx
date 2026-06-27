'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const CHARACTER_IMAGE = '/images/bfsy.webp'

export default function Live2DViewer() {
	const [pointer, setPointer] = useState({ x: 0, y: 0 })

	useEffect(() => {
		const handleMove = (event: MouseEvent) => {
			const x = (event.clientX / window.innerWidth - 0.5) * 24
			const y = (event.clientY / window.innerHeight - 0.5) * 18
			setPointer({ x, y })
		}

		window.addEventListener('mousemove', handleMove)

		return () => {
			window.removeEventListener('mousemove', handleMove)
		}
	}, [])

	return (
		<div className='relative w-full max-w-6xl overflow-hidden rounded-[40px] border border-white/50 bg-white/28 px-6 py-8 shadow-[0_35px_120px_-45px_rgba(35,116,151,0.55)] backdrop-blur-2xl sm:px-10 sm:py-10'>
			<div className='pointer-events-none absolute inset-0 overflow-hidden rounded-[40px]'>
				<div className='absolute -left-12 top-12 h-44 w-44 rounded-full bg-cyan-200/45 blur-3xl' />
				<div className='absolute right-0 top-0 h-64 w-64 rounded-full bg-lime-100/55 blur-3xl' />
				<div className='absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-sky-100/55 blur-3xl' />
				<div className='absolute left-[10%] top-[18%] h-3 w-3 animate-pulse rounded-full bg-white/80 shadow-[0_0_30px_rgba(255,255,255,0.9)]' />
				<div className='absolute right-[18%] top-[24%] h-4 w-4 animate-pulse rounded-full bg-cyan-100/80 shadow-[0_0_35px_rgba(180,244,255,0.9)] [animation-delay:400ms]' />
				<div className='absolute bottom-[24%] right-[22%] h-3 w-3 animate-pulse rounded-full bg-lime-100/80 shadow-[0_0_35px_rgba(230,255,200,0.9)] [animation-delay:900ms]' />
			</div>

			<div className='relative grid min-h-[72vh] items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]'>
				<div className='z-10 space-y-6 text-center lg:text-left'>
					<div className='inline-flex items-center gap-3 rounded-full border border-white/55 bg-white/55 px-4 py-2 text-sm font-medium uppercase tracking-[0.28em] text-slate-500 shadow-[0_20px_45px_-32px_rgba(0,0,0,0.45)]'>
						<span className='h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.8)]' />
						BFSY Showcase
					</div>
					<div className='space-y-4'>
						<h1 className='text-4xl font-semibold leading-tight text-slate-700 sm:text-5xl lg:text-6xl'>
							把角色页改成
							<span className='block bg-gradient-to-r from-cyan-500 via-sky-500 to-lime-400 bg-clip-text text-transparent'>更像舞台展示的橱窗</span>
						</h1>
						<p className='mx-auto max-w-xl text-base leading-8 text-slate-500 lg:mx-0'>
							这一页现在改成了图片驱动的伪 Live2D 展示页保留轻盈的浅色氛围，用呼吸、漂浮、柔光和鼠标跟随，让角色更有存在感。
						</p>
					</div>
					<div className='flex flex-wrap justify-center gap-3 lg:justify-start'>
						<div className='rounded-full border border-white/55 bg-white/60 px-4 py-2 text-sm text-slate-500 shadow-[0_16px_36px_-28px_rgba(0,0,0,0.35)]'>Breathing Motion</div>
						<div className='rounded-full border border-white/55 bg-white/60 px-4 py-2 text-sm text-slate-500 shadow-[0_16px_36px_-28px_rgba(0,0,0,0.35)]'>Pointer Follow</div>
						<div className='rounded-full border border-white/55 bg-white/60 px-4 py-2 text-sm text-slate-500 shadow-[0_16px_36px_-28px_rgba(0,0,0,0.35)]'>Glass Stage</div>
					</div>
				</div>

				<div className='relative flex min-h-[520px] items-end justify-center'>
					<div className='absolute bottom-10 h-24 w-[72%] rounded-full bg-slate-400/20 blur-3xl' />
					<div className='absolute bottom-20 h-[68%] w-[68%] rounded-full bg-gradient-to-b from-cyan-200/55 via-sky-100/30 to-transparent blur-3xl' />
					<div
						className='relative w-full max-w-[520px] rounded-[36px] border border-white/55 bg-white/36 p-4 shadow-[0_35px_100px_-42px_rgba(16,63,82,0.7)] backdrop-blur-xl transition-transform duration-300 ease-out'
						style={{
							transform: `translate3d(${pointer.x}px, ${pointer.y * 0.85}px, 0) rotateX(${pointer.y * -0.14}deg) rotateY(${pointer.x * 0.2}deg)`
						}}
					>
						<div className='absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent' />
						<div className='relative overflow-hidden rounded-[28px] border border-white/65 bg-white/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]'>
							<div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.4),transparent_48%)]' />
							<div className='pointer-events-none absolute -left-10 top-8 h-28 w-28 rounded-full bg-cyan-100/75 blur-2xl' />
							<div className='pointer-events-none absolute -right-6 bottom-6 h-24 w-24 rounded-full bg-lime-100/75 blur-2xl' />
							<div className='animate-[float_6s_ease-in-out_infinite]'>
								<div className='animate-[breathe_5.2s_ease-in-out_infinite]'>
									<Image
										src={CHARACTER_IMAGE}
										alt='BFSY character'
										width={760}
										height={440}
										priority
										className='relative z-10 h-auto w-full object-cover'
									/>
								</div>
							</div>
						</div>
						<div className='mt-4 flex items-center justify-between gap-4 rounded-[24px] border border-white/55 bg-white/58 px-4 py-3 text-sm text-slate-500 shadow-[0_20px_45px_-32px_rgba(0,0,0,0.38)]'>
							<div>
								<p className='text-xs uppercase tracking-[0.24em] text-slate-400'>Character</p>
								<p className='mt-1 text-base font-medium text-slate-600'>BFSY / Minato style portrait</p>
							</div>
							<div className='text-right'>
								<p className='text-xs uppercase tracking-[0.24em] text-slate-400'>Mode</p>
								<p className='mt-1 text-base font-medium text-cyan-600'>Pseudo Live2D</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				@keyframes breathe {
					0%,
					100% {
						transform: scale(0.985);
					}
					50% {
						transform: scale(1.02);
					}
				}

				@keyframes float {
					0%,
					100% {
						transform: translateY(0px);
					}
					50% {
						transform: translateY(-10px);
					}
				}
			`}</style>
		</div>
	)
}
