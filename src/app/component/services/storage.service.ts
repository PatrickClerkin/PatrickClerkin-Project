import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }

  // Store data in local storage
  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Retrieve data from local storage
  getItem<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  // Remove data from local storage
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Clear all data from local storage
  clear(): void {
    localStorage.clear();
  }

  // Check if a key exists in local storage
  hasKey(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }

  // Get the keys stored in local storage
  getKeys(): string[] {
    return Object.keys(localStorage);
  }

  // Get the length of data stored in local storage
  getLength(): number {
    return localStorage.length;
  }

  // Iterate over each item in local storage and perform a callback function
  forEach(callback: (key: string, value: any) => void): void {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        const value = this.getItem(key);
        if (value !== null) {
          callback(key, value);
        }
      }
    }
  }
}
