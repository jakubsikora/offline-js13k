// Canvas
export const CANVAS_HEIGHT = 600;
export const CANVAS_WIDTH = 800;

// Map
export const MAP_ROWS = 16;
export const MAP_COLS = 16;

// Tiles
export const TILE_HEIGHT = 26;
export const TILE_WIDTH = 52;
export const TILE_TYPE_PATH = 1;
export const TILE_TYPE_BELT = 2;
export const TILE_TYPE_BELT_START = 3;
export const TILE_TYPE_BELT_END = 4;
export const TILE_TYPE_LOBBY = 5;
export const TILE_TYPE_EXIT = 6;
export const TILE_TYPE_WALL_N = 7;
export const TILE_TYPE_WALL_E = 8;
export const TILE_TYPE_BELT_NUMBER = 9;

// Paths
export const PATH_LOCATION_STATUS_INVALID = 'Invalid';
export const PATH_LOCATION_STATUS_VALID = 'Valid';
export const PATH_LOCATION_STATUS_BLOCKED = 'Blocked';
export const PATH_LOCATION_STATUS_VISITED = 'Visited';
export const PATH_LOCATION_STATUS_END = 'End';

// Assets
export const A_FLOOR = 'Floor';
export const A_CHARACTER = 'Character';
export const A_BELT = 'Belt';
export const A_BELT_NUMBER = 'Belt Number';
export const A_BELT_START = 'Belt Start';
export const A_BELT_END = 'Belt End';
export const A_LOBBY = 'Lobby';
export const A_EXIT = 'Exit';
export const A_WALL_N = 'WallN';
export const A_WALL_E = 'WallE';
export const A_LUGGAGE = 'Luggage';
export const TILES_WALK = [A_FLOOR, A_LOBBY];

// Luggage
export const PLAYER_MAP_OFFSET = 20;

// Belt
export const BELT_D = 1;
export const BELT_L = 10;
export const SPAWN_DELAY_BELT = 5000;

// Flight
export const ONTIME = 'ON TIME';
export const WAITING = 'WAITING';
export const LANDED = 'LANDED';
export const BAGS = 'BAGS IN LOBBY';
export const COMPLETED = 'COMPLETED';
export const HIDE = 'HIDE';

// Passenger
export const SPAWN_DELAY_PASSENGERS = 3000;

// HUD
export const HUD_TOP_HEIGHT = 20;
export const HUD_BOTTOM_HEIGHT = 20;
export const TIMETABLE_ROW_HEIGHT = 18;

// Colors
export const BELT_MAIN_COLOR = '#403f3f';
export const BELT_SIDE_COLOR = '#6f6d6e';
