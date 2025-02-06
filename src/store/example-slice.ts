import { ImmerStateCreator } from './types';

type JobState = {
    filters: JobFilters;
};

type JobStringFilters = {
    search: string;
};

type JobRangeFilters = {
    salary: number[];
    experience: number[];
};

type JobMultiSelectFilters = {
    jobWorkMode: number[];
    technology: number[];
    jobType: number[];
    showOptions: number[];
};

type JobFilters = JobRangeFilters & JobMultiSelectFilters & JobStringFilters;

type JobActions = {
    updateFilter: (filterId: keyof JobFilters, value: any) => void;
};

type JobSlice = { jobs: JobState & JobActions };

const initialState: JobState = {
    filters: {
        salary: [0, 0],
        experience: [0, 0],
        jobWorkMode: [],
        technology: [],
        jobType: [],
        showOptions: [0, 0],
        search: '',
    },
};

export const createJobSlice: ImmerStateCreator<JobSlice> = (set) => ({
    jobs: {
        ...initialState,
        updateFilter: (filterId, value) =>
            set(({ jobs }: JobSlice) => {
                jobs.filters[filterId] = value;
            }),
    },
});
