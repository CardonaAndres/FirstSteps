'use client';

import { useEffect } from "react";
import { initialize } from "@/global/store/counter";
import { useAppSelector, useAppDispatch } from "@/global/store";

interface Props {
  description: string;
}

export const SimpleWidgetValue = ({ description }: Props) => {
    const dispatch = useAppDispatch();
    const { value } = useAppSelector(store => store.counter);

    useEffect(() => {
        dispatch(initialize(8))
    }, [dispatch]);

    return (
        <div className="text-center">
            <h4 className="text-3xl font-bold text-gray-800 mb-1">{value}</h4>
            <p className="text-sm text-gray-500">{description}</p>
        </div>
    )
}
