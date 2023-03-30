import React from 'react';
import Title from '../../common/Title';
import SectionLayout from '../../layouts/SectionLayout';
import stacks from './data';

export default function Stacks() {
    return (
        <SectionLayout>
            <Title title="Stacks That We Use" />
            <div className="flex flex-wrap justify-center gap-14 pt-7 m-5">
                {stacks.map((stack) => (
                    <div key={stack._id} className="w-24">
                        <img src={stack.image} className="mx-auto object-cover" alt={stack.name}/>
                        <p className="text-center">{stack.name}</p>
                    </div>
                ))}
            </div>
        </SectionLayout>
    );
}
