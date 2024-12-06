import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { useDebouncedCallback } from 'use-debounce';
import Fuse from 'fuse.js';
import { useNavigate } from 'react-router-dom';

interface SearchSuggestion {
  type: 'category' | 'skill' | 'service';
  text: string;
}

interface SearchBarProps {
  placeholder: string;
  onSearch: (query: string) => void;
  className?: string;
  redirectOnSearch?: boolean;
}

export default function SearchBar({ placeholder, onSearch, className = '', redirectOnSearch = false }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const sampleSuggestions: SearchSuggestion[] = [
    { type: 'category', text: 'Limpieza del Hogar' },
    { type: 'category', text: 'Reparaciones' },
    { type: 'skill', text: 'Pintura de Interiores' },
    { type: 'skill', text: 'Limpieza Profunda' },
    { type: 'service', text: 'Mantenimiento de Jardín' },
    { type: 'service', text: 'Reparación de Electrodomésticos' },
  ];

  const fuse = new Fuse(sampleSuggestions, {
    keys: ['text'],
    threshold: 0.4,
  });

  const debouncedSearch = useDebouncedCallback((value: string) => {
    if (!value.trim()) {
      setSuggestions([]);
      return;
    }

    const searchResults = fuse.search(value);
    setSuggestions(searchResults.map(result => result.item));
  }, 300);

  useEffect(() => {
    debouncedSearch(query);
  }, [query, debouncedSearch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setQuery(suggestion.text);
    if (redirectOnSearch) {
      navigate(`/ayuda?q=${encodeURIComponent(suggestion.text)}`);
    } else {
      onSearch(suggestion.text);
    }
    setShowSuggestions(false);
  };

  const clearSearch = () => {
    setQuery('');
    setSuggestions([]);
    onSearch('');
  };

  const handleSearch = () => {
    if (redirectOnSearch) {
      navigate(`/ayuda?q=${encodeURIComponent(query)}`);
    } else {
      onSearch(query);
    }
    setShowSuggestions(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative flex">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            className="w-full pl-12 pr-10 py-3 rounded-l-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors text-gray-900"
          />
          {query && (
            <button
              onClick={clearSearch}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
        <button
          onClick={handleSearch}
          className="px-6 bg-green-600 text-white rounded-r-lg hover:bg-green-700 transition-colors flex items-center justify-center"
        >
          Buscar
        </button>
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2"
            >
              <Search className="w-4 h-4 text-gray-400" />
              <span className="text-gray-900">{suggestion.text}</span>
              <span className="text-xs text-gray-400 ml-auto">
                {suggestion.type === 'category' && 'Categoría'}
                {suggestion.type === 'skill' && 'Habilidad'}
                {suggestion.type === 'service' && 'Servicio'}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}