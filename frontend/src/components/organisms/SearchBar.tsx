// SearchBar.tsx
'use client';
import React from 'react';
import Input from '@/components/atoms/Input';

interface SearchBarProps {
    keyword: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

const SearchBar = ({ keyword, onChange, placeholder }: SearchBarProps) => {
    return (
        <Input
            value={keyword}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder || '검색어를 입력하세요'}
            className="w-full"
        />
    );
};

export default SearchBar;
