import {Schema, model} from "mongoose";
import { Procedure } from "../interfaces/procedure.interface";

const Segment = new Schema({
    temperature: { type: Number },
    velocityIAS: { type: Number },
    density: { type: Number },
    velocityTAS: { type: Number },
    rateClimb: { type: Number },
    altitudeInDP: { type: Number },
    timeToFinish: { type: Number },
    distanceToFinish: { type: Number },
    timeToDP: { type: Number },
    reachDP: { type: Boolean },
    clearDP: { type: Boolean }
});

const NMotors = new Schema({
    firstSegment: Segment,
    secondSegment: Segment,
    thirdSegment: Segment
});

const Failure = new Schema({
    initialElevation: { type: Number },
    distanceToInitial: { type: Number },
    altitude: {
        state: { type: Boolean },
        dpDistance: { type: Number },
        dpElevation: { type: Number },
        firstSegment: { type: Segment },
        secondSegment: { type: Segment },
        thirdSegment: { type: Segment }
    },
    gradient: {
        state: { type: Boolean },
        dpDistance: { type: Number },
        gradientValue: { type: Number },
        finalGradient: { type: Number },
        firstSegment: { type: Segment },
        secondSegment: { type: Segment },
        thirdSegment: { type: Segment }
    }
});


const ProcedureSchema = new Schema<Procedure> (
    {
        airport: {
            type: Schema.Types.ObjectId,
            ref: 'airports',
            required: true,
        },
        aircraft: {
            type: Schema.Types.ObjectId,
            ref: 'aircrafts',
            required: true,
        },
        sidDoc: {
            type: String,
            required: true,
        },
        rwyDoc: {
            type: String,
            required: true,
        },
        sidName: {
            type: String,
            required: true,
        },
        rwyName: {
            type: String,
            required: true,
        },
        dpName: {
            type: String,
            required: true,
        },
        dpDistance: {
            type: Number,
        },
        dpAltitude: {
            type: Number,
            required: true,
        },
        weight: {
            type: Number,
            required: true,
        },
        procedureN: {
            type: String,
        },
        procedureN1: {
            type: String,
        },
        nMotors: NMotors,
        failure: Failure
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const ProcedureModel = model('procedures', ProcedureSchema);

export default ProcedureModel;