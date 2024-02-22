import React from 'react';
import styled from 'styled-components';
import Button from '../../Button';
import { useWallet } from "@suiet/wallet-kit";
import { JsonRpcProvider, Network } from '@mysten/sui.js';
import { toast } from 'react-toastify';

type SearchObjectType = {
    objectId: string
    type: string
}
function getObjectsOwnedByAddress(value) {
    var objects:SearchObjectType[] = [];
    const provider = new JsonRpcProvider(Network.DEVNET);
    const notifySucces = (message) => toast.success(message, {
        position: toast.POSITION.BOTTOM_CENTER
    });
    const notifyError = (message) => toast.error(message, {
        position: toast.POSITION.BOTTOM_CENTER
    });

    const notifyWarning = (message) => toast.warning(message, {
        position: toast.POSITION.BOTTOM_CENTER
    });
    if (value.length != 42) {
        notifyWarning("Incorrect Address")
    } else {
        try {
            const temp = provider.getObjectsOwnedByAddress(value);
            return temp;
        } catch (e) {
            notifyError("Something went wrong");
        }
    }
    return objects;
}

export default getObjectsOwnedByAddress;