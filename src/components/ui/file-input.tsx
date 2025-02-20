import { ChangeEvent, useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PaperclipIcon } from 'lucide-react';

export function FileInput({ onFileInput }: { onFileInput?: (files: FileList | null) => void }) {
    const [files, setFiles] = useState<FileList | null>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFiles(e.target.files);
    };

    useEffect(() => {
        onFileInput?.(files);
    }, [files]);

    return (
        <div className="flex items-center gap-2">
            <Input type="file" id="file-upload" className="hidden" onChange={handleFileChange} multiple />
            <label htmlFor="file-upload">
                <Button variant="ghost" asChild>
                    <span>
                        <PaperclipIcon className="size-4" />
                    </span>
                </Button>
            </label>
        </div>
    );
}
