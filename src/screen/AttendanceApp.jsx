import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // Make sure to install this package

const AttendanceApp = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <View style={styles.profileImageContainer}>
            <View style={styles.profileImage} />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>2</Text>
            </View>
          </View>
          <Text style={styles.greeting}>Hi Kamalesh</Text>
        </View>
        <TouchableOpacity style={styles.menuButton}>
          <Icon name="grid" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="rgba(255,255,255,0.7)" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="rgba(255,255,255,0.7)"
        />
      </View>

      {/* Attendance Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Attendance</Text>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>09:00 AM</Text>
          <Text style={styles.date}>Sat, Aug 13</Text>
        </View>
        
        <TouchableOpacity style={styles.punchButton}>
          <Icon name="finger-print" size={30} color="white" />
          <Text style={styles.punchButtonText}>PUNCH IN</Text>
        </TouchableOpacity>

        <View style={styles.locationContainer}>
          <Icon name="map-pin" size={16} color="rgba(255,255,255,0.7)" />
          <Text style={styles.locationText}>Location: You are in Office reach</Text>
        </View>
      </View>

      {/* Stats Grid */}
      <View style={styles.statsGrid}>
        <View style={styles.statItem}>
          <Icon name="clock" size={20} color="#4ECDC4" />
          <Text style={styles.statTime}>09:00 AM</Text>
          <Text style={styles.statLabel}>Check In</Text>
        </View>
        <View style={styles.statItem}>
          <Icon name="check-circle" size={20} color="#FF6B6B" />
          <Text style={styles.statTime}>--:--</Text>
          <Text style={styles.statLabel}>Check Out</Text>
        </View>
        <View style={styles.statItem}>
          <Icon name="clock" size={20} color="#45B7D1" />
          <Text style={styles.statTime}>09:00</Text>
          <Text style={styles.statLabel}>Working Hrs</Text>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
          <Icon name="home" size={24} color="white" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="layers" size={24} color="rgba(255,255,255,0.7)" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="send" size={24} color="rgba(255,255,255,0.7)" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="user" size={24} color="rgba(255,255,255,0.7)" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1528',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#ddd',
  },
  badge: {
    position: 'absolute',
    right: -5,
    bottom: -5,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#6b4de6',
    borderWidth: 2,
    borderColor: '#1a1528',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  greeting: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchContainer: {
    margin: 20,
    position: 'relative',
  },
  searchInput: {
    backgroundColor: '#3d2f6a',
    borderRadius: 12,
    padding: 15,
    paddingLeft: 45,
    color: 'white',
    fontSize: 16,
  },
  searchIcon: {
    position: 'absolute',
    left: 15,
    top: 15,
    zIndex: 1,
  },
  card: {
    backgroundColor: '#3d2f6a',
    margin: 20,
    padding: 25,
    borderRadius: 20,
  },
  cardTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  timeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  time: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  date: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16,
  },
  punchButton: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#6b4de6',
    borderWidth: 8,
    borderColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },
  punchButtonText: {
    color: 'white',
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  locationText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 14,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#3d2f6a',
    margin: 20,
    padding: 20,
    borderRadius: 15,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statTime: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  statLabel: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 12,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#3d2f6a',
    padding: 15,
    borderRadius: 30,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  navItem: {
    alignItems: 'center',
    opacity: 0.7,
  },
  navItemActive: {
    opacity: 1,
  },
  navText: {
    color: 'white',
    fontSize: 12,
    marginTop: 4,
  },
});

export default AttendanceApp;