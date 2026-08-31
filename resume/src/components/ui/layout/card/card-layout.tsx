import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import  ViteSection  from '@/components/section/vite-section';
import './card-layout.module.css';


const CardLayout = () => {
	const [selectedId, setSelectedId] = useState(0);
	const containerRefs: any = useRef<HTMLDivElement>(null);
	const cards = [1, 2, 3, 4];

	return (
		<div className={'layout-cards'}>
			{cards.map((card, i) => (
				<motion.div
					className={
						selectedId === card
							? 'opened-card'
							: 'card'
					}
					key={i}
					layout
					onClick={() =>
						selectedId === card
							? setSelectedId(0)
							: setSelectedId(card)
					}
					ref={containerRefs.current[card]}>
					{selectedId === card && (
						<div>
							<ViteSection title={'Layout Card'}></ViteSection>
						</div>
					)}
				</motion.div>
			))}
			<motion.div
				className={'dim-layer'}
				animate={{ opacity: selectedId ? 0.3 : 0 }}
			/>
		</div>
	);
};

export default CardLayout;
